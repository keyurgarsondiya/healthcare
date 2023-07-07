import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Main } from './components';

function AppContainer(): React.ReactElement {
	return (
		// TODO: Setup Theme Provider
		// <ThemeProvider theme={theme}>
		<HashRouter>
			<Main />
		</HashRouter>
		// </ThemeProvider>
	);
}

export default AppContainer;
