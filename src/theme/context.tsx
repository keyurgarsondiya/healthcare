import * as React from 'react';
import { createContext, useContext } from 'react';

import theme, { Theme } from './theme';

interface ThemeProviderProps {
	theme: Theme;
}

interface Props {
	children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeProviderProps>({
	theme: {} as Theme,
});

export const ThemeProvider = ({ children }: Props): React.ReactElement => {
	return (
		<ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = (): { theme: Theme } =>
	useContext<{ theme: Theme }>(ThemeContext);
