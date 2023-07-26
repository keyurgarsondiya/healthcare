import clsx from 'clsx';
import React from 'react';

import { Editor } from '../../components';
import { EditorHistoryProvider } from '../../store';

const Home = (): React.ReactElement => {
	return (
		<EditorHistoryProvider>
			<div className={clsx('w-full h-full bg-inherit')}>
				<div className={clsx('flex flex-row')}>
					<div className={clsx('w-4/5')}>
						<div className={'flex flex-row justify-end pb-[16px]'}>
							<div className={'pr-[16px]'}>
								<button
									className={clsx(
										'flex flex-row items-center font-medium px-4 py-2 border border-gray-900 border-radius rounded'
									)}
								>
									<i className=" w-[24px] h-[24px] mt-[4px] mr-2 fi fi-br-circle-microphone"></i>
									<span>{'Record'}</span>
								</button>
							</div>
							<div className={'pr-[16px]'}>
								<button
									className={clsx(
										'font-medium px-4 py-2 border border-gray-900 border-radius rounded'
									)}
								>
									{'View Recordings'}
								</button>
							</div>
							<div>
								<button
									className={clsx(
										'font-medium px-4 py-2 border border-gray-900 bg-gray-900 text-white border-radius rounded'
									)}
								>
									{'Save'}
								</button>
							</div>
						</div>
						<div className={clsx('h-[540px]', 'relative', 'pl-[80px]')}>
							<Editor />
						</div>
					</div>
					<div className={clsx('w-1/5 pl-[20px]')}>{'Side Panel'}</div>
				</div>
			</div>
		</EditorHistoryProvider>
	);
};

export default Home;
