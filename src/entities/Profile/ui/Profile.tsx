import { classNames } from '../../../shared/lib/classNames/classNames';

import styles from './Profile.module.scss';

interface ProfileProps {
  className?: string;
}

export const Profile = ({ className }: ProfileProps) => (
  <div className={classNames(styles.Profile, {}, [className])} />
);
