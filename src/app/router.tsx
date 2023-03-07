/* eslint-disable import/extensions */
import { createBrowserRouter } from "react-router-dom";
import Account from "../pages/Account";
import TransactionsTab from "../pages/Account/Transactions";
import AssetsTab from "../pages/Account/Assets";
import IssuedTokens from "../pages/Account/Assets/IssuedTokens";
import NFTokens from "../pages/Account/Assets/NFTokens";

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/accounts/:accountId/*",
    element: <Account />,
    errorElement: <h1>Error</h1>,
    children: [{
      path: "transactions",
      element: <TransactionsTab />
    },
    {
      path: "assets",
      element: <AssetsTab />,
      children: [{
        path: "issued",
        element: <IssuedTokens />
      },{
        path: "nft",
        element: <NFTokens />
      }]
    }]
  },
]);

export default router;
