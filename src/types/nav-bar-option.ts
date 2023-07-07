import React from 'react';

export interface NavBarOption {
	active?: boolean;
	label: React.ReactNode;
	path: string;
	key: string;
}
