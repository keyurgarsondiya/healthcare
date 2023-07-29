import React from 'react';
import ReactDOM from 'react-dom/client';

import AppContainer from './app-container';

import './tailwind.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(<AppContainer />);
