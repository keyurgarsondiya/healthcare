import clsx from 'clsx';
import React, { useState } from 'react';

import { DropdownOption } from '../../../../types';

interface DropdownButtonProps {
	hasBeforeIcon: boolean;
	dropdownLabelWidth: number;
	dropdownListWidth: number;
	beforeIcon?: string;
	labelIcon?: string;
	options: Array<DropdownOption>;
	borderLeft?: boolean;
	borderRight?: boolean;
}

export const DropdownButton = ({
	hasBeforeIcon,
	dropdownLabelWidth,
	dropdownListWidth,
	beforeIcon,
	labelIcon,
	options,
	borderLeft = true,
	borderRight = true,
}: DropdownButtonProps): React.ReactElement => {
	const [selected, setSelected] = useState<DropdownOption>(options[0]);
	const [open, setOpen] = useState(false);
	return (
		<div className="relative inline-block text-left flex-auto">
			<div
				onClick={(): void => setOpen(!open)}
				className={clsx(
					// borderRight && 'border-r-[1px]',
					// borderLeft && 'border-l-[1px]',
					'w-full group inline-flex rounded justify-center gap-x-1.5 mr-[-1px] bg-white px-1 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200'
				)}
				// style={{ width: `${dropdownLabelWidth}px` }}
			>
				{hasBeforeIcon && <i className={clsx(beforeIcon, 'mt-[2px]')}></i>}
				{labelIcon ? (
					<i className={labelIcon}></i>
				) : selected ? (
					selected.label.length > 8 ? (
						selected.label.substring(0, 5) + '...'
					) : (
						selected.label
					)
				) : (
					'Select'
				)}
				{open ? (
					<i className="transition ease-in origin-bottom duration-1000 fi fi-rr-angle-up mt-[2px]"></i>
				) : (
					<i className="transition ease-out origin-top duration-1000 fi fi-rr-angle-down mt-[2px]"></i>
				)}
				{selected.label.length > 8 && (
					<div className="opacity-0 transition ease-in-out duration-300 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
						{selected.label}
						<svg
							className="absolute text-black h-2 w-full left-0 top-full"
							x="0px"
							y="0px"
							viewBox="0 0 255 255"
							xmlSpace="preserve"
						>
							<polygon
								className="fill-current"
								points="0,0 127.5,127.5 255,0"
							/>
						</svg>
					</div>
				)}
			</div>
			<ul
				className={clsx(
					'bg-white mt-2 overflow-y-auto',
					'absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-none',
					open ? 'max-h-[200px] ring-1 ring-black ring-opacity-5' : 'max-h-0'
				)}
				style={{ width: `${dropdownListWidth}px` }}
			>
				<div className={'py-1'}>
					{options.map(
						(option, index): React.ReactElement => (
							<DropdownItem
								key={index}
								option={option}
								selected={selected}
								setSelected={setSelected}
								setOpen={setOpen}
							/>
						)
					)}
				</div>
			</ul>
		</div>
	);
};

const DropdownItem = ({
	option,
	selected,
	setSelected,
	setOpen,
}: {
	option: DropdownOption;
	selected: DropdownOption;
	setSelected: (value: DropdownOption) => void;
	setOpen: (value: boolean) => void;
}): React.ReactElement => {
	return (
		<li
			key={option.value}
			className={clsx(
				'p-2 z-20 text-sm hover:bg-gray-100',
				option.value === selected.value.toLowerCase()
					? 'bg-gray-200 text-gray-900'
					: 'text-gray-700',
				'block px-4 py-2 text-sm'
			)}
			onClick={(): void => {
				setSelected(option);
				setOpen(false);
			}}
		>
			{option.label}
		</li>
	);
};
