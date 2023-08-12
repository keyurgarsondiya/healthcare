import { PatientStatus } from '../constants';

export interface PatientListType {
	id: number;
	name: string;
	email: string;
	status: PatientStatus;
}
