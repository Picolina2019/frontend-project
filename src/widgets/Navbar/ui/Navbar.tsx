import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { getUserAuthData, userActions } from 'entities/User';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { LoginModal } from 'features/AuthByUserName';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
        <Text
          theme={TextTheme.PRIMARY}
          className={styles.appName}
          title={t('Frontend app')}
        />
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create}>
          {t('Create article')}
        </AppLink>
        <Dropdown
          direction='bottom left'
          className={styles.dropdown}
          trigger={<Avatar size={30} src={authData.avatar} />}
          items={[
            {
              content: t('Logout'),
              onClick: onLogout,
            },
            {
              content: t('Profile'),
              href: RoutePath.profile + authData.id,
            },
          ]}
        />
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
