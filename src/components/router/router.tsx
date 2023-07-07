import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Pages } from '../../constants';
import { LoadingSuspense } from '../loading-suspense';

const Home = React.lazy(
	() =>
		import(
			// tslint:disable-next-line:space-in-parens
			/* webpackChunk: "home-page" */ '../../pages/home'
		)
);

const About = React.lazy(
	() =>
		import(
			// tslint:disable-next-line:space-in-parens
			/* webpackChunk: "home-page" */ '../../pages/about'
		)
);

const Services = React.lazy(
	() =>
		import(
			// tslint:disable-next-line:space-in-parens
			/* webpackChunk: "home-page" */ '../../pages/services'
		)
);

const Pricing = React.lazy(
	() =>
		import(
			// tslint:disable-next-line:space-in-parens
			/* webpackChunk: "home-page" */ '../../pages/pricing'
		)
);

const Contact = React.lazy(
	() =>
		import(
			// tslint:disable-next-line:space-in-parens
			/* webpackChunk: "home-page" */ '../../pages/contact'
		)
);

function Loading(): React.ReactElement {
	return <LoadingSuspense>{getPageComponent()}</LoadingSuspense>;
}

function componentSuspense(Component: any): React.ReactNode {
	return (
		<React.Suspense fallback={<div>{'Loading...'}</div>}>
			<Component />
		</React.Suspense>
	);
}

function getPageComponent(): React.ReactElement {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={Pages.Home} replace />} />
			<Route path={Pages.Home} element={componentSuspense(Home)} />
			<Route path={Pages.About} element={componentSuspense(About)} />
			<Route path={Pages.Services} element={componentSuspense(Services)} />
			<Route path={Pages.Pricing} element={componentSuspense(Pricing)} />
			<Route path={Pages.Contact} element={componentSuspense(Contact)} />
		</Routes>
	);
}

export default Loading;
