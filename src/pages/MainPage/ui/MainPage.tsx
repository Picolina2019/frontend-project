// import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('main page')}
      {/* <BugButton /> */}
    </div>
  );
};
export default MainPage;
