import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal';

import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const closeModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const openModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);
  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={styles.links}
          onClick={onLogout}>
          {t('Logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={styles.links}
        onClick={openModal}>
        {t('Enter')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={closeModal} />}
    </div>
  );
});
