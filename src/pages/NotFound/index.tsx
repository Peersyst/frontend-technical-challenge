/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import styled from "styled-components";
import { InfoCircleFilled } from '@ant-design/icons';

const ErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const	NotfoundUhOh = styled.div`
	display: inline-block;
	padding: 0.125rem 0.5rem;
	border: 1px solid #232325;
	border-radius: 4px;
	margin-bottom: 1.5rem;
	color: #e0e0e1;
	font-size: 0.75em;
	line-height: 20px;
	font-weight: 700;
`;

const NotFoundTitle = styled.div`
	margin-bottom: 1rem;
	color: #e0e0e1;
	font-size: 2.5em;
	line-height: 48px;
	font-weight: 700;
`;

const NotFoundHit = styled.div`
	margin-bottom: 1rem;
	color: #838386;
	font-size: 1em;
	line-height: 24px;
	font-weight: 700;
`;

const NotFoundWarning = styled.div`
	display: flex;
	align-items: center;
	color: #ff6719;
	font-size: 0.75em;
	line-height: 20px;
	text-transform: uppercase;
	font-weight: 700;
	gap: 0.125rem;
`;

function PageNotFound() {

	return (
		<ErrorContainer>
			<>
				<NotfoundUhOh>
					UH-OH!
				</NotfoundUhOh>
			</>
			<NotFoundTitle>
				Account not PageNotFound
			</NotFoundTitle>
			<NotFoundHit>
				Please check your account ID
			</NotFoundHit>
			<NotFoundWarning>
				<InfoCircleFilled />
				Not found
			</NotFoundWarning>
		</ErrorContainer>
	);
}

export default PageNotFound;
