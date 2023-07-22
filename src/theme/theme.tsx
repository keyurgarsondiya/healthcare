import clsx from 'clsx';

export interface Theme {
	app: {
		padding: string;
		primaryColor: string;
		backgroundColor: string;
		baseFontSize: number;
	};
}

function createThemeVariant(): Theme {
	return {
		app: {
			padding: clsx('p-0'),
			primaryColor: clsx('#4A55A2'),
			backgroundColor: clsx('bg-[#eeeeee]'),
			baseFontSize: 14,
		},
	};
}

export default {
	...createThemeVariant(),
};
