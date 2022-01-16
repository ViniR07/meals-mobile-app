import styled from "styled-components";
import { Icon } from "../UI";

export const RandomMeals = styled.div`
	display: flex;
	min-width: ${(p) => p.$length * 380}px;
	left: 28px;
	justify-content: center;
	align-items: center;
	transition: 0.5s all;
	margin-top: 100px;
	margin-left: 45px;
`;

export const IconNavegationLeft = styled(Icon)`
	position: absolute;
	left: 10px;
	top: 325px;
	z-index: 10;
`;

export const IconNavegationRight = styled(Icon)`
	position: absolute;
	right: 10px;
	top: 325px;
	transform: rotate(180deg);
`;
