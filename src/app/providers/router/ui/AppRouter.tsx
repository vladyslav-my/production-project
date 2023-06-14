import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
	return (
		<div className="router-wrapper">
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					{Object.values(routeConfig).map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
			</Suspense>
		</div>
	);
};

export default AppRouter;
