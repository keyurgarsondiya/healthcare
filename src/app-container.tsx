import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Main } from './components';
import { ThemeProvider } from './theme';

import './app.css';
function AppContainer(): React.ReactElement {
	return (
		// TODO: Setup Theme Provider
		<Auth0Provider
			domain="dev-rlsb3y8ah3nj553c.us.auth0.com"
			clientId="XFH8c6fkfOG1oOmGgq0FS0SN5Ir53cyd"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<ThemeProvider>
				<HashRouter>
					<Main />
				</HashRouter>
			</ThemeProvider>
		</Auth0Provider>
	);
}

export default AppContainer;
