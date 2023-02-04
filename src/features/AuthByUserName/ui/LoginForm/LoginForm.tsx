import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        autoFocus
        placeholder={t('Login')}
        type="text"
        className={styles.input}
      />
      <Input placeholder={t('Password')} type="text" className={styles.input} />
      <Button className={styles.btn}>{t('Enter')}</Button>
    </div>
  );
};
