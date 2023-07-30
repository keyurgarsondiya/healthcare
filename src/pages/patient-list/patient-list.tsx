import React from 'react';

import { Grid, GridToolbar } from './fragments';

import { PatientListProvider } from '../../store/patient-list';

const PatientList = (): React.ReactElement => {
	return (
		<PatientListProvider>
			<div className={'w-full h-full py-[20px] px-[40px]'}>
				<div className={'h-[573px] rounded bg-white p-[20px]'}>
					<GridToolbar />
					<Grid />
				</div>
			</div>
		</PatientListProvider>
	);
};

export default PatientList;
