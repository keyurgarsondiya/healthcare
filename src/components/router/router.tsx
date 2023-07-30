import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Pages } from '../../constants';
import { LoadingSuspense } from '../loading-suspense';
import { ProtectedRoute } from '../protected-route';

const Home = React.lazy(
	() =>
		import(
			// tslint:disable-next-line:space-in-parens
			/* webpackChunk: "home-page" */ '../../pages/home'
		)
);

const Reports = React.lazy(
	() =>
		import(
			// tslint:disable-next-line:space-in-parens
			/* webpackChunk: "reports" */ '../../pages/reports'
		)
);

const PatientList = React.lazy(
	() =>
		import(
			// tslint:disable-next-line:space-in-parens
			/* webpackChunk: "patient-list" */ '../../pages/patient-list'
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

function componentSuspense(Component: any) {
	// eslint-disable-next-line react/display-name
	return (props: any) => (
		<React.Suspense fallback={<div>{'Loading...'}</div>}>
			<Component {...props} />
		</React.Suspense>
	);
}

function getPageComponent(): React.ReactElement {
	return (
		<Switch>
			<Route exact path={'/'}>
				<Redirect from={'/'} to={Pages.Dashboard} />
			</Route>
			<ProtectedRoute
				path={Pages.Dashboard}
				component={componentSuspense(Home)}
			/>
			<ProtectedRoute
				path={Pages.Reports}
				component={componentSuspense(Reports)}
			/>
			<ProtectedRoute
				path={Pages.PatientList}
				component={componentSuspense(PatientList)}
			/>
			{/*<Route element={<ProtectedRoute />}>*/}
			{/*	<Route path={Pages.Dashboard} element={componentSuspense(Home)} />*/}
			{/*	<Route path={Pages.Reports} element={componentSuspense(Reports)} />*/}
			{/*<Route path={Pages.About} element={componentSuspense(About)} />*/}
			{/*<Route path={Pages.Services} element={componentSuspense(Services)} />*/}
			{/*<Route path={Pages.Pricing} element={componentSuspense(Pricing)} />*/}
			{/*<Route path={Pages.Contact} element={componentSuspense(Contact)} />*/}
			{/*</Route>*/}
		</Switch>
	);
}

export default Loading;
