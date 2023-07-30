export interface PatientListStateType {
	gridToolbarState: GridToolbarStateType;
	gridState: GridStateType;
}

export interface GridToolbarStateType {
	patientSearchName: string;
}

export interface GridStateType {
	data: Array<PatientListStateType>;
}
