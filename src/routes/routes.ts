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
	[Pages.Dashboard]: {
		label: 'Dashboard',
		key: 'dashboard',
		path: hashRoute(Pages.Dashboard),
	},
	[Pages.Reports]: {
		label: 'Reports',
		key: 'reports',
		path: hashRoute(Pages.Reports),
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
