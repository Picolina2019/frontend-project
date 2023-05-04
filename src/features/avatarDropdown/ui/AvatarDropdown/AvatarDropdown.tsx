import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      direction="bottom left"
      className={classNames('', {}, [className])}
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t('Admin'), href: RoutePath.admin_panel }]
          : []),

        {
          content: t('Logout'),
          onClick: onLogout,
        },
        {
          content: t('Profile'),
          href: RoutePath.profile + authData.id,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
