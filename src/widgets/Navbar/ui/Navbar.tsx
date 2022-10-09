import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(styles.navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        className={styles.linkFirst}
        to="/about"
      >
        ABOUT
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        MAIN
      </AppLink>
    </div>
  </div>
);
