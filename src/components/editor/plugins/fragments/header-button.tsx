import clsx from 'clsx';
import { LexicalCommand, TextFormatType } from 'lexical';
import React from 'react';

interface HeaderButtonProps {
	iconName: string;
	iconSize: string;
	commandType: LexicalCommand<TextFormatType | void>;
	handleClick: (
		commandType: LexicalCommand<TextFormatType | void>,
		value?: TextFormatType
	) => void;
	setIsClicked: (value: boolean) => void;
	disabled?: boolean;
	isClicked?: boolean;
	leftBorder?: boolean;
	commandValue?: TextFormatType;
}
export const HeaderButton = ({
	iconName,
	iconSize,
	commandType,
	handleClick,
	setIsClicked,
	disabled = false,
	isClicked = false,
	leftBorder = false,
	commandValue,
}: HeaderButtonProps): React.ReactElement => {
	return (
		<div className={clsx('flex flex-none flex-row h-full items-center')}>
			<button
				className={clsx(
					'px-3 py-1 t-[4px] hover:rounded hover:bg-gray-200 transition-colors duration-100 ease-in',
					isClicked ? 'bg-gray-200 rounded' : 'bg-white',
					disabled && 'cursor-not-allowed'
				)}
				disabled={disabled}
				onClick={(): void => {
					setIsClicked(true);
					handleClick(commandType, commandValue);
				}}
			>
				<i className={clsx(iconName, iconSize)}></i>
			</button>
			<span
				className={
					clsx()
					// leftBorder && 'h-[38px] border-r-[1px] border-gray-200'
				}
			/>
		</div>
	);
};
