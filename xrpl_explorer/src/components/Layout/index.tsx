import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import Header from "./Header";

//TODO: Add Header here

/**
 * Component that wraps all pages rendering them on the Outlet
 * Used to add common elements to all pages such as Header or Router
 *
 * @returns AppLayout component
 */

const AppLayout: FunctionComponent = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default AppLayout;