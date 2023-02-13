import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from 'features/AuthByUserName/model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import styles from './LoginForm.module.scss';
import { loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};
const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t('Authorisation form')} />
        {error && (
          <Text
            text={t('Wrong username or password')}
            theme={TextTheme.ERROR}
          />
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
    </DynamicModuleLoader>
  );
});
export default LoginForm;
