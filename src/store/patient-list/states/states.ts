import { gridState } from './grid-state';
import { gridToolbarState } from './grid-toolbar-state';

import { PatientListStateType } from '../store-types';

export const initialState: PatientListStateType = {
	gridToolbarState,
	gridState,
};
