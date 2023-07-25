import clsx from 'clsx';
import React from 'react';

import { Editor } from '../../components';
import { EditorHistoryProvider } from '../../store';

const Home = (): React.ReactElement => {
	return (
		<EditorHistoryProvider>
			<div className={clsx('w-full', 'h-full', 'justify-center')}>
				<div className={clsx('h-[540px]', 'relative', 'px-[80px]')}>
					<Editor />
				</div>
			</div>
		</EditorHistoryProvider>
	);
};

export default Home;
