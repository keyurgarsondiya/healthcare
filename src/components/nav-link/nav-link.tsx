import clsx from 'clsx';
import React from 'react';

import { NavBarOption } from '../../types';

const ACTIVE_TAB_CLASSNAME = clsx(
	'text-center block rounded py-2 px-4 text-gray-900 font-medium bg-gray-300 hover:bg-gray-300/75'
);
const INACTIVE_TAB_CLASSNAME = clsx(
	'text-center block rounded py-2 px-4 text-gray-900 font-medium hover:border-gray-300 hover:bg-gray-300'
);

export const NavLink = ({
	label,
	path,
	key,
	active,
}: NavBarOption): React.ReactElement => {
	return (
		<li className={clsx('items-center mr-2')}>
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
