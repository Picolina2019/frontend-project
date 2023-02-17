import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo(
  ({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => (
    <div
      className={classNames(styles.Text, { [styles[theme]]: true }, [
        className,
      ])}>
      {title && <div className={styles.title}>{title}</div>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  )
);
