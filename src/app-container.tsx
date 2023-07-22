import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Main } from './components';
import { ThemeProvider } from './theme';

import './app.css';

function AppContainer(): React.ReactElement {
	return (
		// TODO: Setup Theme Provider
		<ThemeProvider>
			<HashRouter>
				<Main />
			</HashRouter>
		</ThemeProvider>
	);
}

export default AppContainer;
