import clsx from 'clsx';
import React from 'react';

interface HeaderButtonProps {
	iconName: string;
	iconSize: string;
	leftBorder?: boolean;
}
export const HeaderButton = ({
	iconName,
	iconSize,
	leftBorder = false,
}: HeaderButtonProps): React.ReactElement => {
	return (
		<div className={clsx('flex flex-row h-full items-center')}>
			<button
				className={clsx(
					'px-2 py-1 t-[4px] bg-white hover:rounded hover:bg-gray-200 transition-colors duration-100 ease-in'
				)}
			>
				<i className={clsx(iconName, iconSize)}></i>
			</button>
			<span
				className={clsx(
					leftBorder && 'h-[38px] border-r-[1px] border-gray-200'
				)}
			/>
		</div>
	);
};
