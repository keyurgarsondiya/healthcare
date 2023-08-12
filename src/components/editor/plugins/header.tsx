import { $isLinkNode } from '@lexical/link';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import {
	$getRoot,
	$getSelection,
	$isParagraphNode,
	$isRangeSelection,
	CLEAR_EDITOR_COMMAND,
	FORMAT_TEXT_COMMAND,
	LexicalCommand,
	REDO_COMMAND,
	TextFormatType,
	UNDO_COMMAND,
} from 'lexical';
import { noop } from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { TOGGLE_EDIT_LINK_MENU } from './edit-link';
import { DropdownButton, HeaderButton } from './fragments';
import {
	ALIGN_OPTIONS,
	FONT_SIZE_OPTIONS,
	INSERT_OPTIONS,
	QUOTE_OPTIONS,
	TEXT_OPTIONS,
} from './fragments/constants';

import { useEditorHistory } from '../../../store';

export const Header = (): React.ReactElement => {
	const [editor] = useLexicalComposerContext();
	editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
	const {
		state: { historyState },
	} = useEditorHistory();
	const [isBold, setIsBold] = useState(false);
	const [isItalic, setIsItalic] = useState(false);
	const [isUnderline, setIsUnderline] = useState(false);
	const [isCode, setIsCode] = useState(false);
	const [isLink, setIsLink] = useState(false);
	const [isEditorEmpty, setIsEditorEmpty] = useState(true);

	const { undoStack, redoStack } = historyState ?? {};
	const [hasUndo, setHasUndo] = useState(undoStack?.length !== 0);
	const [hasRedo, setHasRedo] = useState(redoStack?.length !== 0);

	const MandatoryPlugins = useMemo(() => {
		return <ClearEditorPlugin />;
	}, []);

	const updateToolbar = useCallback((): void => {
		const root = $getRoot();
		const children = root.getChildren();
		const selection = $getSelection();

		if (children.length > 1) {
			setIsEditorEmpty(false);
			return;
		}

		if ($isParagraphNode(children[0])) {
			setIsEditorEmpty(children[0].getChildren().length === 0);
		} else {
			setIsEditorEmpty(false);
		}

		if ($isRangeSelection(selection)) {
			const nodes = selection.getNodes();
			setIsBold(selection.hasFormat('bold'));
			setIsItalic(selection.hasFormat('italic'));
			setIsUnderline(selection.hasFormat('underline'));
			setIsCode(selection.hasFormat('code'));
			setIsLink(nodes.every((node) => $isLinkNode(node.getParent())));
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

	useEffect(() => {
		return editor.registerUpdateListener(() => {
			setHasRedo(redoStack?.length !== 0);
			setHasUndo(undoStack?.length !== 0);
		});
	}, [editor, undoStack, redoStack]);

	const handleButtonClick = (
		command: LexicalCommand<TextFormatType | void>,
		value?: TextFormatType
	): void => {
		editor.dispatchCommand(command, value);
	};

	return (
		<div
			className={
				'w-full h-[40px] mr-[-1px] rounded-t-lg bg-white flex flex-row items-center justify-evenly'
			}
			id={'editor-header'}
		>
			{MandatoryPlugins}
			<HeaderButton
				iconName={'fi fi-rr-rotate-left'}
				iconSize={'text-base'}
				commandType={UNDO_COMMAND}
				handleClick={handleButtonClick}
				setIsClicked={noop}
				disabled={!hasUndo}
			/>
			<HeaderButton
				iconName={'fi fi-rr-rotate-right'}
				iconSize={'text-base'}
				commandType={REDO_COMMAND}
				handleClick={handleButtonClick}
				setIsClicked={noop}
				disabled={!hasRedo}
			/>
			<HeaderButton
				iconName={'fi fi-br-trash'}
				iconSize={'text-base'}
				commandType={CLEAR_EDITOR_COMMAND}
				handleClick={handleButtonClick}
				setIsClicked={noop}
				disabled={isEditorEmpty}
			/>
			<DropdownButton
				hasBeforeIcon={true}
				dropdownLabelWidth={130}
				dropdownListWidth={150}
				beforeIcon={'fi fi-rr-message-quote'}
				options={QUOTE_OPTIONS}
			/>
			<DropdownButton
				hasBeforeIcon={true}
				dropdownLabelWidth={120}
				dropdownListWidth={150}
				beforeIcon={'fi fi-br-t'}
				options={TEXT_OPTIONS}
			/>
			<DropdownButton
				hasBeforeIcon={false}
				dropdownLabelWidth={90}
				dropdownListWidth={150}
				options={FONT_SIZE_OPTIONS}
			/>
			<HeaderButton
				iconName={'fi fi-br-bold'}
				iconSize={'text-base'}
				commandType={FORMAT_TEXT_COMMAND}
				handleClick={handleButtonClick}
				setIsClicked={setIsBold}
				isClicked={isBold}
				commandValue={'bold'}
			/>
			<HeaderButton
				iconName={'fi fi-br-italic'}
				iconSize={'text-base'}
				commandType={FORMAT_TEXT_COMMAND}
				setIsClicked={setIsItalic}
				isClicked={isItalic}
				handleClick={handleButtonClick}
				commandValue={'italic'}
			/>
			<HeaderButton
				iconName={'fi fi-br-underline'}
				iconSize={'text-base'}
				commandType={FORMAT_TEXT_COMMAND}
				setIsClicked={setIsUnderline}
				isClicked={isUnderline}
				handleClick={handleButtonClick}
				commandValue={'underline'}
			/>
			<HeaderButton
				iconName={'fi fi-br-code-simple'}
				iconSize={'text-base'}
				commandType={FORMAT_TEXT_COMMAND}
				setIsClicked={setIsCode}
				isClicked={isCode}
				handleClick={handleButtonClick}
				commandValue={'code'}
			/>
			<HeaderButton
				iconName={'fi fi-br-link-horizontal'}
				iconSize={'text-base'}
				commandType={TOGGLE_EDIT_LINK_MENU}
				isClicked={isLink}
				setIsClicked={setIsLink}
				handleClick={handleButtonClick}
				leftBorder
			/>
			<DropdownButton
				hasBeforeIcon={false}
				dropdownLabelWidth={70}
				dropdownListWidth={150}
				labelIcon={'fi fi-br-a'}
				options={[{ label: 'A', value: 'a' }]}
				borderLeft={false}
			/>
			<DropdownButton
				hasBeforeIcon={false}
				dropdownLabelWidth={70}
				dropdownListWidth={150}
				labelIcon={'fi fi-br-fill'}
				options={[{ label: 'A', value: 'a' }]}
				borderRight={false}
			/>
			<DropdownButton
				hasBeforeIcon={false}
				dropdownLabelWidth={70}
				dropdownListWidth={150}
				labelIcon={'fi fi-rr-text-size'}
				options={[{ label: 'A', value: 'a' }]}
			/>
			<DropdownButton
				hasBeforeIcon={true}
				dropdownLabelWidth={150}
				dropdownListWidth={150}
				beforeIcon={'fi fi-br-plus-small'}
				options={INSERT_OPTIONS}
			/>
			<DropdownButton
				hasBeforeIcon={true}
				dropdownLabelWidth={150}
				dropdownListWidth={150}
				beforeIcon={'fi fi-br-align-left'}
				options={ALIGN_OPTIONS}
				borderRight={false}
			/>
		</div>
	);
};
