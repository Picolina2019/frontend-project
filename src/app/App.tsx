import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="contentPage">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
