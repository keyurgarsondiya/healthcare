import { Pages } from '../constants';
import { Link } from '../types';
import { hashRoute } from '../utils';

type Route = {
	label: string;
	key: string;
	path: string;
};

export type RouteDefinitions = {
	[index: string]: Route;
};

const routes: RouteDefinitions = {
	[Pages.Home]: {
		label: 'Home',
		key: 'home',
		path: hashRoute(Pages.Home),
	},
	[Pages.About]: {
		label: 'About',
		key: 'about',
		path: hashRoute(Pages.About),
	},
	[Pages.Services]: {
		label: 'Services',
		key: 'services',
		path: hashRoute(Pages.Services),
	},
	[Pages.Pricing]: {
		label: 'Pricing',
		key: 'pricing',
		path: hashRoute(Pages.Pricing),
	},
	[Pages.Contact]: {
		label: 'Contact',
		key: 'contact',
		path: hashRoute(Pages.Contact),
	},
};

export const linksFromRoutes = (routes: RouteDefinitions): Array<Link> =>
	Object.entries(routes).map(([page, route]: [string, Route]) => ({
		label: route.label,
		key: route.key,
		path: route.path,
		page,
	}));

export const links: Array<Link> = linksFromRoutes(routes);
