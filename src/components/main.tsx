import clsx from 'clsx';
import React from 'react';

import { Header } from './header';
import { Router } from './router';

import { IntlProvider } from '../store';
import theme from '../theme';

export const Main = (): React.ReactElement => (
	<IntlProvider>
		<div
			className={clsx(
				'flex',
				'flex-col',
				'h-full',
				'w-full',
				theme.app.backgroundColor,
				theme.app.baseFontSize
			)}
		>
			<Header />
			<Router />
		</div>
	</IntlProvider>
);
