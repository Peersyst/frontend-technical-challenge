import React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

export const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Spinner = ({ color = '#36d7b7' }) => (<SpinnerContainer><ClipLoader color={color} /></SpinnerContainer>);

export default Spinner;
