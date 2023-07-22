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
	LocalStoragePlugin,
	OpenLinkPlugin,
	ToolbarPlugin,
} from './plugins';
import { isValidUrl } from './plugins/utils';
const theme = {};
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
	const initialConfig = {
		namespace: EDITOR_NAMESPACE,
		editorState: content,
		nodes: EDITOR_NODES,
		theme: {
			root: 'p-4 border-slate-500 border-2 rounded h-full min-h-[200px] focus:outline-none focus-visible:border-black',
			link: 'cursor-pointer',
			text: {
				bold: 'font-semibold',
				underline: 'underline',
				italic: 'italic',
				strikethrough: 'line-through',
				underlineStrikethrough: 'underlined-line-through',
			},
		},
		onError,
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<RichTextPlugin
				contentEditable={<ContentEditable className={'content-editable'} />}
				placeholder={<div className={'placeholder'}>Enter some text...</div>}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<HistoryPlugin />
			<MarkdownShortcutPlugin transformers={TRANSFORMERS} />
			<ListPlugin />
			<LinkPlugin validateUrl={isValidUrl} />
			{/*	Custom Plugins */}
			<ToolbarPlugin />
			<AutoLinkPlugin />
			<EditLinkPlugin />
			<FloatingMenuPlugin />
			<LocalStoragePlugin namespace={EDITOR_NAMESPACE} />
			<OpenLinkPlugin />
		</LexicalComposer>
	);
};
