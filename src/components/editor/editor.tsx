import { CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { TRANSFORMERS } from '@lexical/markdown';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import React from 'react';

import './styles.css';
import {
	AutoLinkPlugin,
	EditLinkPlugin,
	FloatingMenuPlugin,
	HeaderPlugin,
	LocalStoragePlugin,
	OpenLinkPlugin,
	// ToolbarPlugin,
} from './plugins';
import { isValidUrl } from './plugins/utils';
import { theme } from './theme';

import { useEditorHistory } from '../../store';
const EDITOR_NAMESPACE = 'lexical-editor';
const onError = (error: any): void => {
	console.error(error);
};

const EDITOR_NODES = [
	AutoLinkNode,
	CodeNode,
	HeadingNode,
	LinkNode,
	ListNode,
	ListItemNode,
	QuoteNode,
];
export const Editor = (): React.ReactElement => {
	const content = localStorage.getItem(EDITOR_NAMESPACE);
	const {
		state: { historyState },
	} = useEditorHistory();
	const initialConfig = {
		namespace: EDITOR_NAMESPACE,
		editorState: content,
		nodes: EDITOR_NODES,
		theme,
		onError,
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			{/*<ToolbarPlugin />*/}
			<HeaderPlugin />
			<RichTextPlugin
				contentEditable={<ContentEditable className={'content-editable'} />}
				placeholder={
					<div className={'editor-placeholder'}>Enter some text...</div>
				}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<HistoryPlugin externalHistoryState={historyState} />
			<MarkdownShortcutPlugin transformers={TRANSFORMERS} />
			<ListPlugin />
			<LinkPlugin validateUrl={isValidUrl} />
			{/*	Custom Plugins */}
			<AutoLinkPlugin />
			<EditLinkPlugin />
			<FloatingMenuPlugin />
			<LocalStoragePlugin namespace={EDITOR_NAMESPACE} />
			<OpenLinkPlugin />
		</LexicalComposer>
	);
};
