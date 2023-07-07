import clsx from 'clsx';

export interface Theme {
	app: {
		primaryColor: string;
		backgroundColor: string;
		baseFontSize: number;
	};
}

function createThemeVariant(): Theme {
	return {
		app: {
			primaryColor: clsx('#4A55A2'),
			backgroundColor: clsx('#C5DFF8'),
			baseFontSize: 14,
		},
	};
}

export default {
	...createThemeVariant(),
};
