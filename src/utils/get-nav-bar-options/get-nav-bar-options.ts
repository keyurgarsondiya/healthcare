import { Link, NavBarOption } from '../../types';
import { hashRoute } from '../hash-route';

export const getNavBarOptions = (
	links: Array<Link>,
	pathname: string
): Array<NavBarOption> => {
	return [
		...links.map((page: Link) => ({
			label: page.label,
			path: page.path,
			key: page.key,
			...(hashRoute(pathname).includes(page.path) && { active: true }),
		})),
	];
};
