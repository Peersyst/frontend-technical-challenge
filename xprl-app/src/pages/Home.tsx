/** @format */

import { defaultAddress } from "../utils/defaultAddress";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const localStorageAccount = localStorage.getItem("lastAccountVisited");
    const navigate = useNavigate();

    //Here the correct thing is to know if that address exists.
    const id =
        localStorageAccount !== undefined
            ? localStorageAccount
            : defaultAddress;

    useEffect(() => {
        navigate(`/accounts/${id}/transactions`);
    }, [id, navigate]);

    return <></>;
}
