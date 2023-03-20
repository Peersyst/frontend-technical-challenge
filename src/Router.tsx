import Navbar from "components/Navbar/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Outlet />
            </>
        ),
    },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
