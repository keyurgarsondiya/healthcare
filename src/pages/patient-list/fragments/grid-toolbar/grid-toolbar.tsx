import clsx from 'clsx';
import { debounce } from 'lodash';
import React, { useCallback, useEffect } from 'react';

import { ActionType, usePatientList } from '../../../../store/patient-list';

export const GridToolbar = (): React.ReactElement => {
	const { dispatch } = usePatientList();

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		dispatch({
			type: ActionType.SetSearchPatient,
			payload: {
				name: event.target.value,
			},
		});
	};

	const debounceSetSearchName = useCallback(
		debounce(handleInputChange, 500),
		[]
	);

	useEffect(() => {
		return () => {
			debounceSetSearchName.cancel();
		};
	}, []);

	return (
		<div className={'flex flex-row pb-[8px] justify-between'}>
			<div className={'flex flex-col'}>
				<p className={'font-semibold pb-[8px]'}>{'Patient List'}</p>
				<p className={'text-sm'}>
					{
						'A list of all the patients in your account including their name, title and email'
					}
				</p>
			</div>
			<div className={'flex flex-row items-center'}>
				<div className={'flex flex-row items-center pr-[20px]'}>
					<i className="fi fi-rr-search absolute justify-center items-center pl-[10px] -mb-[1px]"></i>
					<input
						className={
							'pr-[8px] py-[8px] pl-[35px] rounded border-[1px] border-gray-300'
						}
						placeholder={'Search Patient'}
						// value={searchName}
						onChange={debounceSetSearchName}
					/>
				</div>
				<div className={''}>
					<button
						className={clsx(
							'font-medium px-4 py-2 border border-gray-900 bg-gray-900 text-white border-radius rounded'
						)}
					>
						{'Add Patient'}
					</button>
				</div>
			</div>
		</div>
	);
};
