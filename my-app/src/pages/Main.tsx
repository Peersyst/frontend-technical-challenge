import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
	const navigate = useNavigate();
	const account = localStorage.getItem("lastAccountSearched");
	const id = account ? account : "r3RaNVLvWjqqtFAawC6jbRhgKyFH7HvRS8";
	useEffect(() => {
		navigate(`/accounts/${id}/transactions`);
	}, [navigate, id]);

	return <></>;
}

export default Main;
