import styled from "styled-components";
import { Icon } from "../UI";

export const RandomMeals = styled.div`
	position: absolute;
	top: 120px;
	display: flex;
    left: 28px;
	justify-content: center;
	align-items: center;
    transition: .5s all;
`;

export const IconNavegationLeft = styled(Icon)`
	position: absolute;
	left: 10px;
	top: 325px;
	z-index: 100;
`;

export const IconNavegationRight = styled(Icon)`
	position: absolute;
	right: 10px;
	top: 325px;
	transform: rotate(180deg);
`;