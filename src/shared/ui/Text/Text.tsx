import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}
export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.CENTER,
  }: TextProps) => {
    const mods: Mods = {
      [styles[theme]]: true,
      [styles[align]]: true,
    };
    return (
      <div className={classNames(styles.Text, mods, [className])}>
        {title && <div className={styles.title}>{title}</div>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    );
  }
);
