/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import React, { ReactNode, useEffect, useState } from 'react';
import { useRef } from 'react';

import { useSettings } from './context/SettingsContext';
import { useSharedHistoryContext } from './context/SharedHistoryContext';
import ActionsPlugin from './plugins/ActionsPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';
import CharacterStylesPopupPlugin from './plugins/CharacterStylesPopupPlugin';
import ClickableLinkPlugin from './plugins/ClickableLinkPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import EmojisPlugin from './plugins/EmojisPlugin';
import KeywordsPlugin from './plugins/KeywordsPlugin';
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin';
import MarkdownShortcutPlugin from './plugins/MarkdownShortcutPlugin';
import SpeechToTextPlugin from './plugins/SpeechToTextPlugin';
import TabFocusPlugin from './plugins/TabFocusPlugin';
import ContentEditable from './ui/ContentEditable';
import Placeholder from './ui/Placeholder';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import EditorContext from './context/EditorContext';
import { $getNodeByKey, $isRangeSelection, $isTextNode, LexicalEditor } from 'lexical';
import { useTranslation } from 'react-i18next';
import DragDropPaste from './plugins/DragDropPastePlugin';
import DraggableBlockPlugin from './plugins/DraggableBlockPlugin'; 

import {$getSelection, SELECTION_CHANGE_COMMAND, $createNodeSelection, $isParagraphNode, $isElementNode, ParagraphNode } from 'lexical';
import { REPLACE_TEXT_WITH_API_CALL_COMMAND } from './commands/custom-commands';  
import {$generateHtmlFromNodes} from '@lexical/html';
import type { LexicalNode } from 'lexical';
import invariant from './shared/src/invariant';
import {
  $findMatchingParent
} from '@lexical/utils';



interface IEditorProps {
  children?: ReactNode;
  hashtagsEnabled?: boolean;
  autoLinkEnabled?: boolean;
  emojisEnabled?: boolean;
  actionsEnabled?: boolean;
  placeholder?: string;
  listMaxIndent?: number;
  isEditable?: boolean;
  locale?: 'en' | 'fr' | 'ptBr' | 'ru' | null;
  onChange?: (editorState: string, editorInstance?: LexicalEditor) => void;
}

const Editor = ({
  children,
  hashtagsEnabled = false,
  autoLinkEnabled = false,
  emojisEnabled = false,
  actionsEnabled = false,
  listMaxIndent = 7,
  placeholder = '',
  isEditable = true,
  locale = null,
  onChange,
}: IEditorProps) => {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);

  const editorStateRef = useRef(null);
  const { historyState } = useSharedHistoryContext();
  const {
    settings: { isRichText },
  } = useSettings();
  const placeholderComponent = <Placeholder>{placeholder}</Placeholder>;

  const { i18n } = useTranslation();
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] =
    useState<boolean>(false);
  
    const onRef = (_floatingAnchorElem: HTMLDivElement) => {
      if (_floatingAnchorElem !== null) {
        setFloatingAnchorElem(_floatingAnchorElem);
      }
    };

    function getChildrenRecursively(node: LexicalNode): Array<LexicalNode> {
      const nodes = [];
      const stack = [node];
      while (stack.length > 0) {
        const currentNode = stack.pop();
        invariant(
          currentNode !== undefined,
          "Stack.length > 0; can't be undefined",
        );
        if ($isElementNode(currentNode)) {
          stack.unshift(...currentNode.getChildren());
        }
        if (currentNode !== node) {
          nodes.push(currentNode);
        }
      }
      return nodes;
    }



  useEffect(() => {
    // Update editor with current selection  
  // editor.update(() => {  
  //   const selection = $getSelection();  
  // });  
  
  // // Read editor state and get current selection  
  // if (editorStateRef.current) {  
  //   editorStateRef.current.read(() => {  
  //     const selection = $getSelection();  
  //   });  
  // }  
  
  // Register SELECTION_CHANGE_COMMAND to update selection when it changes. This placeholder implementation prints it to console.
  editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {  
    const selection = $getSelection();  
    // console.log('Current selection:', selection.getTextContent());
    return true; // Return true to indicate the command executed successfully  
  }, 0);  
    editor.setEditable(isEditable);

    if (locale) i18n.changeLanguage(locale);
  }, []);

  

    
  editor.registerCommand(REPLACE_TEXT_WITH_API_CALL_COMMAND, (payload) => {  
    const selection = $getSelection();

    if ($isRangeSelection(selection) && selection.isCollapsed()) {
        console.log('selection is collapsed');

        const anchorNode = selection.anchor.getNode();
        
        // Find the matching parent node using your editor's custom function
        const parent = $findMatchingParent(anchorNode, (node) => $isParagraphNode(node));

        if (parent) {
            // Create a node selection
            const nodeSelection = $createNodeSelection();

            // Add the parent node to the node selection
            nodeSelection.add(parent.__key);

            // Get all children of the parent node recursively
            const children = getChildrenRecursively(parent);
            for (const child of children) {
                nodeSelection.add(child.__key);
            }

            const nodeHtml = $generateHtmlFromNodes(editor, nodeSelection);
            console.log('Node content as HTML:', nodeHtml);
        }

    } else {
        const selectedHtml = $generateHtmlFromNodes(editor, selection);
        console.log('Selected content as HTML:', selectedHtml);
    }
    
    return true;  
}, 0); 


  return (
    <EditorContext.Provider
      value={{ initialEditor: editor, activeEditor, setActiveEditor }}
    >
      {children}
      <div className={`editor-container`} ref={onRef}>  
        <AutoFocusPlugin />
        <ClearEditorPlugin />
        {hashtagsEnabled && <HashtagPlugin />}
        {emojisEnabled && <EmojisPlugin />}
        <KeywordsPlugin />
        <SpeechToTextPlugin />
        <DragDropPaste />
        {autoLinkEnabled && <AutoLinkPlugin />}

        <>
          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={placeholderComponent}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin
            onChange={(editorState) => {
              onChange?.(JSON.stringify(editorState), activeEditor);
              return (editorStateRef.current = editorState);
            }}
          />
          <MarkdownShortcutPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <CheckListPlugin />
          <ListMaxIndentLevelPlugin maxDepth={listMaxIndent} />
          <LinkPlugin />
          <ClickableLinkPlugin />
          <CharacterStylesPopupPlugin />
          <TabFocusPlugin />
          {floatingAnchorElem && !isSmallWidthViewport && (
              <>
                <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
              </>
            )}
        </>

        <HistoryPlugin externalHistoryState={historyState} />
        {actionsEnabled && <ActionsPlugin isRichText={isRichText} />}
      </div>
    </EditorContext.Provider>
  );
};

export default Editor;
