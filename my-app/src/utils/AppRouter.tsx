import { Routes, Route } from "react-router-dom";

import Explorer from "../pages/Explorer/Explorer";
import Main from "../pages/Main";
const AppRouter = () => {
	return (
		<Routes>
			<Route path="*" element={<Main />} />
			<Route path="/accounts/:id/*" element={<Explorer />} />
		</Routes>
	);
};
export default AppRouter;
