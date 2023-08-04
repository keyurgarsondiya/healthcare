import React from 'react';
import { EditorComposer, Editor, Divider } from '../src/components/playground';
import ToolbarPlugin from '../src/components/playground/plugins/ToolbarPlugin/ToolbarPlugin';

import {
  AlignDropdown,
  BackgroundColorPicker,
  BlockFormatDropdown,
  BoldButton,
  CodeFormatButton,
  CodeLanguageDropdown,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  RedoButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  UndoButton,
} from '../src/components/playground/plugins/ToolbarPlugin/components';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';

const initialState = () => {
  const paragraph = $createParagraphNode();
  const text = $createTextNode('Hello World!');
  paragraph.append(text);
  const root = $getRoot();
  root.append(paragraph);
  root.selectEnd();
};

import './app.css';

function AppContainer(): React.ReactElement {
  return (
    <div className={'app-container'}>
      <EditorComposer initialEditorState={initialState}>
        <Editor>
          <ToolbarPlugin>
            <FontFamilyDropdown />
            <FontSizeDropdown />
            <Divider />
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
            <CodeFormatButton />
            <InsertLinkButton />
            <TextColorPicker />
            <BackgroundColorPicker />
            <TextFormatDropdown />
            <Divider />
            <InsertDropdown />
            <Divider />
            <AlignDropdown />
          </ToolbarPlugin>
        </Editor>
      </EditorComposer>
    </div>
  );
}

export default AppContainer;
