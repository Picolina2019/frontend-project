import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';
import {
  fetchProfileData,
  getProfileData,
  getProfileLoading,
  ProfileCard,
  profileReducer,
  getProfileError,
  profileActions,
  getProfileReadonly,
  getProfileForm,
  getProfileValidateErrors,
  ValidateProfileErrors,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{ id: string }>();
  
  const validateErrorTranslates = {
    [ValidateProfileErrors.SERVER_ERROR]: t('Server error'),
    [ValidateProfileErrors.INCORRECT_USER_COUNTRY]: t('Incorrect country'),
    [ValidateProfileErrors.NO_DATA]: t('No data'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Name and Surname'),
    [ValidateProfileErrors.INCORRECT_USER_AGE]: t('Incorrect age'),
  };
  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          age: Number(value?.replace(/\D/gi, '') || 0),
        })
      );
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <VStack gap='16' max>
          <ProfilePageHeader />

          {validateErrors?.length &&
            validateErrors?.map((err) => (
              <Text
                key={err}
                theme={TextTheme.ERROR}
                text={validateErrorTranslates[err]}
              />
            ))}
          <ProfileCard
            data={form}
            isLoading={isLoading}
            error={error}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            readonly={readonly}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
});
export default ProfilePage;
