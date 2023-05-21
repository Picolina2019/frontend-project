import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: true;
    settingsPageHasBeenOpen?: false;
}
