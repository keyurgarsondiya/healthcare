import { EditorThemeClasses } from 'lexical';

export const theme: EditorThemeClasses = {
	root: 'p-4 rounded-b-lg h-full min-h-[200px] focus:outline-none focus:border-2 focus:border-gray-200',
	link: 'cursor-pointer',
	text: {
		bold: 'font-semibold',
		underline: 'underline',
		italic: 'italic',
		strikethrough: 'line-through',
		underlineStrikethrough: 'underlined-line-through',
	},
};
