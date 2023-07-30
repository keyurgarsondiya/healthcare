import clsx from 'clsx';
import React from 'react';

export const SidePanel = (): React.ReactElement => {
	return (
		<div className={clsx('w-full h-full flex flex-col')}>
			<div
				className={
					'h-2/5 flex flex-col justify-between bg-white rounded-t-lg p-[12px]'
				}
			>
				<div>
					<input
						className={'w-full p-[8px] rounded border-[1px] border-gray-300'}
						placeholder={'Workflow name'}
					/>
				</div>
				<div>
					<button
						className={
							'w-full p-[8px] rounded border-[1px] border-gray-300 font-medium'
						}
					>
						{'Save Workflow'}
					</button>
				</div>
				<div>
					<button
						className={
							'w-full p-[8px] rounded border-[1px] border-gray-300 font-medium'
						}
					>
						{'Load Workflow'}
					</button>
				</div>
				<div>
					<button
						className={
							'w-full p-[8px] rounded border-[1px] border-gray-300 font-medium'
						}
					>
						{'View Prompts'}
					</button>
				</div>
			</div>
			<div className={'h-3/5 bg-gray-50 rounded-b-lg p-[12px]'}>
				<div className={'pb-[8px]'}>
					<p className={'text-sm text-gray-600'}>
						{'You can drag these nodes to the pane on the left.'}
					</p>
				</div>
				<div className={'py-[8px]'}>
					<button
						className={
							'w-full p-[8px] rounded bg-gray-900 text-white font-medium'
						}
					>
						{'Output Node'}
					</button>
				</div>
				<div>
					<button
						className={
							'w-full p-[8px] rounded bg-gray-900 text-white font-medium'
						}
					>
						{'Custom Node'}
					</button>
				</div>
			</div>
		</div>
	);
};
