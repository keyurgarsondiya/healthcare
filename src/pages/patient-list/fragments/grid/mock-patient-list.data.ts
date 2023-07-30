import { PatientStatus } from '../../../../constants';
import { PatientListType } from '../../../../types';

export const MOCK_PATIENT_LIST_DATA: Array<PatientListType> = [
	{
		id: 1,
		name: 'Rose Golden',
		email: 'rose.golden@healthcare.com',
		status: PatientStatus.Active,
	},
	{
		id: 2,
		name: 'Henry Gold',
		email: 'henry.gold@healthcare.com',
		status: PatientStatus.Inactive,
	},
	{
		id: 3,
		name: 'Rose Golden',
		email: 'rose.golden@healthcare.com',
		status: PatientStatus.Active,
	},
	{
		id: 4,
		name: 'Henry Gold',
		email: 'henry.gold@healthcare.com',
		status: PatientStatus.Inactive,
	},
	{
		id: 5,
		name: 'Rose Golden',
		email: 'rose.golden@healthcare.com',
		status: PatientStatus.Active,
	},
	{
		id: 6,
		name: 'Henry Gold',
		email: 'henry.gold@healthcare.com',
		status: PatientStatus.Inactive,
	},
];
