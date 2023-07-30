import React from 'react';

export const PatientListHeader = (): React.ReactElement => {
	return (
		<div className={'w-full flex flex-row font-semibold py-[20px]'}>
			<div className={'w-24'}>{'ID'}</div>
			<div className={'w-96'}>{'Name'}</div>
			<div className={'w-72'}>{'Status'}</div>
			<div className={'w-32'}>{''}</div>
		</div>
	);
};
