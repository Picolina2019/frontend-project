import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Profile')} />
        <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>{t('edit')}</Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('Your name')}
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your surname')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
