import clsx from 'clsx';
import React from 'react';

import { SidePanel } from './fragments';

import { PlaygroundEditor } from 'src/components/lexical-editor';
import { EditorHistoryProvider } from '../../store';
import Settings from 'src/components/lexical-editor/playground/Settings';

const Home = (): React.ReactElement => {
	return (
		<EditorHistoryProvider>
			<div className={clsx('w-full h-[calc(100vh-102px)] bg-inherit')}>
				<div className={clsx('flex flex-row h-full pt-[20px] px-[40px]')}>
					<div className={clsx('w-4/6')}>
						<div className={'flex flex-row justify-end pb-[16px]'}>
							<div className={'pr-[16px]'}>
								<button
									className={clsx(
										'flex flex-row items-center justify-center font-medium px-4 py-2 border border-gray-900 border-radius rounded'
									)}
								>
									<i className=" w-[24px] h-[24px] -mb-1 fi fi-br-circle-microphone"></i>
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
						<div className={clsx('h-4/6', 'relative')}>
							<PlaygroundEditor />
						</div>
						<Settings />
					</div>
					<div className={clsx('w-2/6 h-full pl-[20px]')}>
						<SidePanel />
					</div>
				</div>
			</div>
		</EditorHistoryProvider>
	);
};

export default Home;
