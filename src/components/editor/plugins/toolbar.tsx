import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import clsx from 'clsx';
import {
	$getSelection,
	$isRangeSelection,
	FORMAT_ELEMENT_COMMAND,
	FORMAT_TEXT_COMMAND,
	REDO_COMMAND,
	UNDO_COMMAND,
} from 'lexical';
import React, { useEffect, useState } from 'react';

export const Toolbar = () => {
	const [editor] = useLexicalComposerContext();
	const [isBold, setIsBold] = useState(false);
	const [isItalic, setIsItalic] = React.useState(false);
	const [isStrikethrough, setIsStrikethrough] = React.useState(false);
	const [isUnderline, setIsUnderline] = React.useState(false);
	const updateToolbar = React.useCallback(() => {
		const selection = $getSelection();
		if ($isRangeSelection(selection)) {
			setIsBold(selection.hasFormat('bold'));
			setIsItalic(selection.hasFormat('italic'));
			setIsStrikethrough(selection.hasFormat('strikethrough'));
			setIsUnderline(selection.hasFormat('underline'));
		}
	}, [editor]);
	useEffect(() => {
		return mergeRegister(
			editor.registerUpdateListener(({ editorState }) => {
				editorState.read(() => {
					updateToolbar();
				});
			})
		);
	}, [updateToolbar, editor]);

	return (
		<div className="fixed z-20 shadow bottom-2 left-1/2 transform -translate-x-1/2 min-w-52 h-10 px-2 py-2 bg-[#1b2733] mb-4 space-x-2 flex items-center">
			<button
				className={clsx(
					'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
					isBold ? 'bg-gray-700' : 'bg-transparent'
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-bold' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
					isStrikethrough ? 'bg-gray-700' : 'bg-transparent'
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-strikethrough' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
					isItalic ? 'bg-gray-700' : 'bg-transparent'
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-italic' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
					isUnderline ? 'bg-gray-700' : 'bg-transparent'
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-underline' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>

			<span className="w-[1px] bg-gray-600 block h-full"></span>

			<button
				className={clsx(
					'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-align-left' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-align-center' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-align-right' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-align-justify' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>

			<span className="w-[1px] bg-gray-600 block h-full"></span>

			<button
				className={clsx(
					'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
				)}
				onClick={() => {
					editor.dispatchCommand(UNDO_COMMAND, undefined);
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-rotate-left' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
				)}
				onClick={() => {
					editor.dispatchCommand(REDO_COMMAND, undefined);
				}}
			>
				<FontAwesomeIcon
					icon={'fa-solid fa-rotate-right' as IconProp}
					className="text-white w-3.5 h-3.5"
				/>
			</button>
		</div>
	);
};
