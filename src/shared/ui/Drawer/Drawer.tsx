import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import styles from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen, lazy } = props;
  const { theme } = useTheme();

  const { close, isClosing, isMounted } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
      <div
        className={classNames(styles.Drawer, mods, [
          className,
          theme,
          'app_drawer',
        ])}>
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
});
