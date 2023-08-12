import { ActionType } from './action-type';
import { PayloadTypes } from './payload-types';
import { PatientListStateType } from './store-types';

import { ActionMap } from '../action-map';

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

type Payload = {
	[ActionType.SetSearchPatient]: PayloadTypes['setSearchPatient'];
	[ActionType.SetPatientListData]: PayloadTypes['setPatientListData'];
};

export const reducer = (
	state: PatientListStateType,
	action: Actions
): PatientListStateType => {
	switch (action.type) {
		case ActionType.SetSearchPatient:
			return {
				...state,
				gridToolbarState: {
					...state.gridToolbarState,
					patientSearchName: action.payload.name,
				},
			};
		default:
			return state;
	}
};
