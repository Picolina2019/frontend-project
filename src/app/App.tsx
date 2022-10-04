import { Link } from 'react-router-dom';
import './styles/index.scss';
import '../index.scss';
import { classNames } from '../shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={classNames('app', { hovered: true, visited: false }, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>toggle theme</button>
      <AppRouter />
    </div>
  );
};
