import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from '../../types';
import { getNavBarOptions } from '../../utils';
import { NavBar } from '../nav-bar';

interface NavProps {
	links: Array<Link>;
}

export const Nav = ({ links }: NavProps): React.ReactElement => {
	const { pathname } = useLocation();
	return <NavBar options={getNavBarOptions(links, pathname)} />;
};
