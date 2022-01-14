import styled from "styled-components";
import { sombra, cinzaBackground } from "../UI/variaveis";
import { Icon } from "../UI";

export const MealsApp = styled.div`
	position: relative;
	max-width: 100%;
	width: 500px;
	height: 1000px;
	margin: 0 auto;
	background-color: ${cinzaBackground};
	${sombra}
	border-radius: 6px;
	overflow: hidden;
`;

export const RandomMeals = styled.div`
	position: absolute;
	top: 110px;
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