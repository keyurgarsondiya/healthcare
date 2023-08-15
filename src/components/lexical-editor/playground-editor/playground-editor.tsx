import React from 'react';
import {
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  Divider,
  Editor,
  EditorComposer,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
} from '../playground';
import ToolbarPlugin from '../playground/plugins/ToolbarPlugin/ToolbarPlugin';
import ComponentPickerPlugin from '../playground/plugins/ComponentPickerPlugin';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';

const initialState = () => {
  const paragraph = $createParagraphNode();
  const text = $createTextNode('Hello World!');
  paragraph.append(text);
  const root = $getRoot();
  root.append(paragraph);
  root.selectEnd();
};

export const PlaygroundEditor = (): React.ReactElement => {
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
          <ComponentPickerPlugin />
        </Editor>
      </EditorComposer>
    </div>
  );
};
