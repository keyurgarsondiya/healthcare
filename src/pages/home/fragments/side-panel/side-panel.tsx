import clsx from 'clsx';
import React, { useState } from 'react';

import { Dropdown } from '../../../../components/dropdown';
import { DropdownOption } from '../../../../types';

export const SidePanel = (): React.ReactElement => {
	const [selectedOption, setSelectedOption] = useState<string | undefined>(
		undefined
	);
	const DROPDOWN_OPTIONS: Array<DropdownOption> = [
		{
			label: 'AP_to_bulleted',
			value: 'apToBulleted',
		},
		{
			label: 'Option 2',
			value: 'option 2',
		},
	];
	return (
		<div className={clsx('w-full h-full flex flex-col')}>
			<div className={'w-full pb-[16px]'}>
				<Dropdown
					options={DROPDOWN_OPTIONS}
					selected={selectedOption}
					onChange={setSelectedOption}
				/>
			</div>
			<div className={'w-full h-full'}>
				<div className={'h-1/3 flex flex-col bg-white rounded-t-lg p-[12px]'}>
					<p className={'text-sm'}>
						{
							'Convert selected text to bulleted format Assessment and Plan. Please use on AP format text only'
						}
					</p>
					<div className={'flex flex-row pt-[20px]'}>
						<div className={'pr-[12px]'}>
							<button
								className={clsx(
									'font-medium px-4 py-2 border border-gray-900 bg-gray-900 text-white border-radius rounded'
								)}
							>
								{'Run'}
							</button>
						</div>
						<div>
							<button
								className={clsx(
									'font-medium px-4 py-2 border border-gray-900 bg-transparent text-black border-radius rounded'
								)}
							>
								{'Make Bold'}
							</button>
						</div>
					</div>
				</div>

				<div
					className={
						'h-2/3 bg-gray-50 rounded-b-lg p-[12px] flex flex-col justify-between'
					}
				>
					<div>
						<p className={'text-sm text-gray-500'}>{'Chat biopsy'}</p>
					</div>
					<div>
						<input
							className={'w-full p-[8px] rounded border-[1px] border-gray-300'}
							placeholder={'Enter chat query'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
