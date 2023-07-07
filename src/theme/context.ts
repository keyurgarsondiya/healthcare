import * as React from 'react';

interface ThemeProviderProps {
	children: any;
	theme: {
		[key: string]: any;
	};
}

interface ThemeContextProps {
	themeBundle: any;
}

export declare const useThemeContext: () => ThemeContextProps;
export declare const ThemeProvider: (
	props: ThemeProviderProps
) => React.ReactElement;
