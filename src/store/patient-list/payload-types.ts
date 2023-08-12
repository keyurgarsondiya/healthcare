import { PatientListType } from '../../types';

export interface PayloadTypes {
	setSearchPatient: {
		name: string;
	};
	setPatientListData: {
		list: Array<PatientListType>;
	};
}
