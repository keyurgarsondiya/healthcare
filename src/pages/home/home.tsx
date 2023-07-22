import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faAlignCenter,
	faAlignJustify,
	faAlignLeft,
	faAlignRight,
	faBold,
	faItalic,
	faRotateLeft,
	faRotateRight,
	faStrikethrough,
	faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import React from 'react';

import { Editor } from '../../components';

library.add(
	faBold,
	faStrikethrough,
	faItalic,
	faUnderline,
	faAlignLeft,
	faAlignRight,
	faAlignCenter,
	faAlignJustify,
	faRotateLeft,
	faRotateRight
);

const Home = (): React.ReactElement => {
	return (
		<div
			className={clsx(
				'py-4',
				'px-[80px]',
				'w-full',
				'h-full',
				'justify-center'
			)}
		>
			<div className={clsx('h-[545px]', 'relative', 'pt-7')}>
				<Editor />
			</div>
		</div>
	);
};

export default Home;
