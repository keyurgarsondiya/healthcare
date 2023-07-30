import React, { createContext, useContext, useReducer } from 'react';

import { Actions, reducer } from './reducer';
import { initialState } from './states';
import { PatientListStateType } from './store-types';

const PatientListContext = createContext<{
	state: PatientListStateType;
	dispatch: React.Dispatch<Actions>;
}>({
	state: initialState,
	dispatch: () => null,
});

export const PatientListProvider = ({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<PatientListContext.Provider value={{ state: { ...state }, dispatch }}>
			{children}
		</PatientListContext.Provider>
	);
};

export const usePatientList = (): {
	state: PatientListStateType;
	dispatch: React.Dispatch<Actions>;
} => useContext(PatientListContext);
