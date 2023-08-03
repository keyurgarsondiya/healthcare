import React from 'react';
import {
	AlignDropdown,
	BackgroundColorPicker,
	BoldButton,
	CodeFormatButton,
	Divider,
	Editor,
	EditorComposer,
	FloatingLinkEditor,
	FontFamilyDropdown,
	FontSizeDropdown,
	InsertDropdown,
	InsertLinkButton,
	ItalicButton,
	TextColorPicker,
	TextFormatDropdown,
	ToolbarPlugin,
	UnderlineButton,
} from 'verbum';

export const LexicalPlayground = (): React.ReactElement => {
	return (
		<EditorComposer>
			<Editor hashtagsEnabled={true}>
				<ToolbarPlugin defaultFontSize="20px">
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
					<InsertDropdown enablePoll={true} />
					<Divider />
					<AlignDropdown />
				</ToolbarPlugin>
			</Editor>
		</EditorComposer>
	);
};
