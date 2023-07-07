import React from 'react';
import ReactDOM from 'react-dom/client';

import './tailwind.css';
import AppContainer from './app-container';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<AppContainer />
	</React.StrictMode>
);
