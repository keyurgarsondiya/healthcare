import React from 'react';
import './loading-spinner.css';

export const LoadingSpinner = (): React.ReactElement => {
	return (
		<div className="spinner-container">
			<div className="loading-spinner"></div>
		</div>
	);
};
