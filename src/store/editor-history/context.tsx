import {
	createEmptyHistoryState,
	HistoryState,
} from '@lexical/react/LexicalHistoryPlugin';
import React, { createContext, ReactNode, useContext, useMemo } from 'react';

export type EditorHistoryStateContext = {
	historyState?: HistoryState;
};

const Context = createContext<EditorHistoryStateContext>({});

export function EditorHistoryProvider({
	children,
}: {
	children: ReactNode;
}): JSX.Element {
	const h = useMemo(() => ({ historyState: createEmptyHistoryState() }), []);
	return <Context.Provider value={h}>{children}</Context.Provider>;
}

export const useEditorHistory = (): {
	state: EditorHistoryStateContext;
} => ({
	state: useContext(Context),
});
