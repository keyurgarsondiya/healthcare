import clsx from 'clsx';
import React, { useState } from 'react';

import { DownArrow } from './down-arrow';
import { DropdownItem } from './fragments';

import { DropdownOption } from '../../types';

export const Dropdown = ({
	options,
	onChange,
	selected,
	containerWidth = ['w-full'],
}: {
	options: Array<DropdownOption>;
	onChange: (value?: string) => void;
	selected?: string;
	containerWidth?: Array<string>;
}): React.ReactElement => {
	const [open, setOpen] = useState(false);

	return (
		<div className={clsx(containerWidth, 'relative inline-block text-left')}>
			<div>
				<button
					type="button"
					className={clsx(
						open ? 'rounded-t-lg' : 'rounded-md',
						'inline-flex w-full justify-between gap-x-1.5 bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-gray-100'
					)}
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={(): void => setOpen(!open)}
				>
					{selected
						? options.find((option) => option.value === selected)?.label
						: 'Option'}
					<DownArrow />
				</button>
			</div>
			<ul
				className={clsx(
					'w-full bg-white overflow-y-auto',
					'absolute right-0 z-10 origin-top-right rounded-b-lg bg-white shadow-lg focus:outline-none',
					open ? 'max-h-[200px] ring-1 ring-black ring-opacity-5' : 'max-h-0'
				)}
			>
				<div className={'py-1 w-full'}>
					{options.map((option, index) => (
						<DropdownItem
							key={index}
							option={option}
							setOption={onChange}
							setOpen={setOpen}
							selected={selected}
						/>
					))}
				</div>
			</ul>
		</div>
	);
};
