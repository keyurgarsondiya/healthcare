import React, { useEffect, useState } from 'react';

import { MOCK_PATIENT_LIST_DATA } from './mock-patient-list.data';

import { usePatientList } from '../../../../store/patient-list';
import { PatientListType } from '../../../../types';
import { PatientListHeader } from '../patient-list-header';
import { PatientRow } from '../patient-row';

export const Grid = (): React.ReactElement => {
	const {
		state: {
			gridToolbarState: { patientSearchName },
		},
	} = usePatientList();
	const [patientList, setPatientList] = useState<Array<PatientListType>>(
		MOCK_PATIENT_LIST_DATA
	);

	useEffect(() => {
		setPatientList(
			MOCK_PATIENT_LIST_DATA.filter((patient) =>
				patient.name.toLowerCase().includes(patientSearchName.toLowerCase())
			)
		);
	}, [patientSearchName]);

	return (
		<div>
			<PatientListHeader />
			<div className={'h-[409px] overflow-y-scroll'}>
				{patientList.map((patient) => (
					<PatientRow key={patient.id} patient={patient} />
				))}
			</div>
		</div>
	);
};
