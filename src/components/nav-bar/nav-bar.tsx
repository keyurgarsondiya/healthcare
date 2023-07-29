import { useAuth0 } from '@auth0/auth0-react';
import clsx from 'clsx';
import React from 'react';

import { NavBarOption } from '../../types';
import { NavLink } from '../nav-link';

interface NavBarProps {
	options: Array<NavBarOption>;
}
export const NavBar = ({ options }: NavBarProps): React.ReactElement => {
	const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		<nav className=" border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className={'flex flex-row'}>
					<a href="#" className="flex items-center pr-[20px]">
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Healthcare
						</span>
					</a>
					{/*<div className="block lg:hidden">*/}
					{/*	<button className="flex items-center px-3 py-2 border rounded border-gray-200 hover:gray-200">*/}
					{/*		<svg*/}
					{/*			className="fill-current h-3 w-3"*/}
					{/*			viewBox="0 0 20 20"*/}
					{/*			xmlns="http://www.w3.org/2000/svg"*/}
					{/*		>*/}
					{/*			<title>Menu</title>*/}
					{/*			<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />*/}
					{/*		</svg>*/}
					{/*	</button>*/}
					{/*</div>*/}
					<div id="navbar-default">
						<ul className="flex">
							{options.map(
								(option: NavBarOption): React.ReactElement => (
									<NavLink
										key={option.key}
										path={option.path}
										label={option.label}
										active={option?.active}
									/>
								)
							)}
						</ul>
					</div>
				</div>
				<div>
					<button
						className={clsx(
							'font-medium px-4 py-2 border border-gray-900 bg-gray-900 text-white border-radius rounded'
						)}
						onClick={(): Promise<void> => logout()}
					>
						{'Logout'}
					</button>
				</div>
			</div>
		</nav>
	);
};
