import clsx from 'clsx';
import React from 'react';

import { Header } from './header';
import { Router } from './router';

import { IntlProvider } from '../store';

export const Main = (): React.ReactElement => (
	<IntlProvider>
		<div className={clsx('flex', 'flex-col', 'h-screen', 'w-full')}>
			<Header />
			<Router />
		</div>
	</IntlProvider>
);
