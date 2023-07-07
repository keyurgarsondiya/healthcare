import clsx from 'clsx';
import React from 'react';

import { NavBarOption } from '../../types';

const ACTIVE_TAB_CLASSNAME =
	'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500';
const INACTIVE_TAB_CLASSNAME =
	'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

export const NavLink = ({
	label,
	path,
	key,
	active,
}: NavBarOption): React.ReactElement => {
	return (
		<li>
			<a
				key={key}
				href={path}
				className={clsx(active ? ACTIVE_TAB_CLASSNAME : INACTIVE_TAB_CLASSNAME)}
				aria-current={active}
			>
				{label}
			</a>
		</li>
	);
};
