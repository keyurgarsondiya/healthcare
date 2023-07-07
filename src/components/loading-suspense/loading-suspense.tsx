import React from 'react';

import { LoadingSpinner } from '../loading-spinner';

interface LoadingSuspenseProps {
	children: React.ReactNode;
}

export const LoadingSuspense = ({
	children,
}: LoadingSuspenseProps): React.ReactElement => (
	<React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>
);
