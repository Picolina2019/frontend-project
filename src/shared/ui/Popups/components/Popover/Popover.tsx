import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { ReactNode } from 'react';
import { mapDirectionClass } from '../../styles/consts';
import styles from './Popover.module.scss';
import popupCls from '../../styles/popups.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const { className, trigger, direction = 'bottom right', children } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(styles.Popover, {}, [className, popupCls.popup])}>
      <HPopover.Button as='div' className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(styles.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
