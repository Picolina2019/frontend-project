import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { t } from 'i18next';
import React, { useState } from 'react';
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
  const toggleModal = () => {
    setIsAuthModal((prev) => !prev);
  };
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={styles.links}
        onClick={toggleModal}>
        {t('Enter')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={toggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum!{' '}
      </Modal>
    </div>
  );
};
