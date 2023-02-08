import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
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

export const Text = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: TextProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.Text, { [styles[theme]]: true }, [
        className,
      ])}>
      {title && <div className={styles.title}>{title}</div>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
