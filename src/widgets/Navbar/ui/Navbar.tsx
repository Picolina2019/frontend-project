import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal';
import { t } from 'i18next';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const closeModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const openModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={styles.links}
        onClick={openModal}>
        {t('Enter')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={closeModal} />
    </div>
  );
};
