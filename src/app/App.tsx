import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserMounted, initAuthData } from 'entities/User';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!mounted) {
        return <PageLoader />;
    }
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="contentPage">
                    <Sidebar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
