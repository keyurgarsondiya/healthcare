import clsx from 'clsx';
import React from 'react';

import { DropdownOption } from '../../../../types';

export const DropdownItem = ({
	option,
	selected,
	setOption,
	setOpen,
}: {
	option: DropdownOption;
	selected?: string;
	setOption: (value?: string) => void;
	setOpen: (value: boolean) => void;
}): React.ReactElement => {
	return (
		<li
			key={option.value}
			className={clsx(
				'w-full p-2 z-20 text-sm hover:bg-gray-100',
				selected?.toLowerCase() === option.value.toLowerCase()
					? 'bg-gray-200 text-gray-900'
					: 'text-gray-700',
				'block px-4 py-2 text-sm'
			)}
			onClick={(): void => {
				setOption(option.value);
				setOpen(false);
			}}
		>
			{option.label}
		</li>
	);
};
