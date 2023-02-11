import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);
  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Authorisation form')} />
      {error && (
        <Text text={t('Wrong username or password')} theme={TextTheme.ERROR} />
      )}
      <Input
        onChange={onChangeUsername}
        autoFocus
        placeholder={t('Login')}
        type='text'
        className={styles.input}
        value={username}
      />
      <Input
        onChange={onChangePassword}
        autoFocus
        placeholder={t('Password')}
        type='text'
        className={styles.input}
        value={password}
      />
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={styles.btn}>
        {t('Enter')}
      </Button>
    </div>
  );
});
