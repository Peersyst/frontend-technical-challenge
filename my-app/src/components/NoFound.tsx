import { ReactNode } from "react";
import styled from "styled-components";

const NoFoundComponent = styled.span`
	display: flex;
	justify-content: center;
`;

export default function NoFound({ children }: { children: ReactNode }) {
	return <NoFoundComponent>{children}</NoFoundComponent>;
}
