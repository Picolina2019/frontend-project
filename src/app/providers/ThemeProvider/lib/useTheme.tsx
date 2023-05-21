import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResults {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResults {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;

                break;
            case Theme.LIGHT:
                newTheme = Theme.BLUE;

                break;
            case Theme.BLUE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);

        saveAction?.(newTheme);
    };
    return { theme: theme || Theme.LIGHT, toggleTheme };
}
