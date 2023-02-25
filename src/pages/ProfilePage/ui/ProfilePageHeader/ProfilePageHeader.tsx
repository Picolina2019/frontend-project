import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {readonly ? (
        <Button
          onClick={onEdit}
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}>
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button
            onClick={onCancelEdit}
            className={styles.editBtn}
            theme={ButtonTheme.OUTLINE_RED}>
            {t('abort')}
          </Button>
          <Button
            onClick={onSave}
            className={styles.saveBtn}
            theme={ButtonTheme.OUTLINE}>
            {t('safe')}
          </Button>
        </>
      )}
    </div>
  );
};
