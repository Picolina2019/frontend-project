import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';

import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames';

const Component = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'swe' ? 'en' : 'swe');
  };
  return (
    <div>
      <button type="button" onClick={toggle}>
        {t('translate')}
      </button>
      {t('hello')}
    </div>
  );
};

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Suspense fallback="">
      <div
        className={classNames('app', { hovered: true, visited: false }, [
          theme,
        ])}
      >
        <Navbar />
        <Component />

        <div className='contentPage'>
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
