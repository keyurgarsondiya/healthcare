import clsx from 'clsx';
import React, { useContext } from 'react';

import { IntlContext } from '../../../../store';
import { PatientListType } from '../../../../types';

export const PatientRow = ({
	patient,
}: {
	patient: PatientListType;
}): React.ReactElement => {
	const { t } = useContext(IntlContext);
	return (
		<div
			className={
				'w-full flex flex-row border-y-[1px] border-gray-300 items-center py-[20px] -mt-[1px]'
			}
		>
			<div className={'w-24'}>{patient.id}</div>
			<div className={'w-96 flex flex-col'}>
				<p className={'font-semibold text-sm'}>{patient.name}</p>
				<p className={'font-medium text-xs'}>{patient.email}</p>
			</div>
			{/*TODO: Identify what component or icon is used for Status*/}
			<div className={'w-72'}>{t(patient.status)}</div>
			<div className={'w-32 flex flex-col justify-center items-center'}>
				<button
					className={clsx(
						'font-medium px-4 py-1 border border-gray-900 bg-transparent text-black border-radius rounded'
					)}
				>
					{'View'}
				</button>
			</div>
		</div>
	);
};
