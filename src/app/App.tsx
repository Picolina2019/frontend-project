import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames';

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='contentPage'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
