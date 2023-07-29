import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Route } from 'react-router-dom';

import { LoadingSpinner } from '../loading-spinner';

interface ProtectedRouteProps {
	path: string;
	component: React.FC;
}
export const ProtectedRoute = ({
	path,
	component,
}: ProtectedRouteProps): JSX.Element => {
	return (
		<Route
			path={path}
			component={withAuthenticationRequired(component, {
				onRedirecting: () => <LoadingSpinner />,
			})}
		/>
	);
	// const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
	// const navigate = useNavigate();
	// const location = useLocation();
	// console.log('Location: ', location);
	//
	// useEffect(() => {
	// 	(async (): Promise<void> => {
	// 		if (!isAuthenticated) {
	// 			loginWithRedirect({
	// 				appState: { returnTo: location.pathname },
	// 			});
	// 		}
	// 		// if (isLoading || isAuthenticated) {
	// 		// 	await navigate(location.pathname);
	// 		// 	return;
	// 		// } else {
	// 		// 	loginWithRedirect({
	// 		// 		appState: { returnTo: location.pathname },
	// 		// 	});
	// 		// }
	// 	})();
	// }, [isAuthenticated, loginWithRedirect, isLoading, location.pathname]);
	// // <Navigate to={loginWithRedirect()} />;
	// return <Outlet />;
};
