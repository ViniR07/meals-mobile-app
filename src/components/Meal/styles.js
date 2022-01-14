import styled from 'styled-components';
import { brancoBackground, sombra } from '../UI/variaveis';

export const HeaderCard = styled.header`
	width: 100%;
`;

export const MainCard = styled.main`
	padding: 1.5rem 1.5rem 2.5rem 1.5rem;
`;

export const MealCard = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${brancoBackground};
	border-radius: 4px;
	${sombra}
	overflow: hidden;
	text-align: center;
	margin-left: 2rem;
	transition: 0.5s all;
`;

export const TextCard = styled.p`
	margin: 2rem 0;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const IconDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1.5rem;
`;

export const IconBox = styled.div`
	display: flex;
	align-items: center;
	margin-left: 0.5rem;
	justify-content: space-between;
`;

export const RecipeImage = styled.div`
	background-image: linear-gradient(
			to bottom,
			transparent,
			90%,
			${brancoBackground}
		),
		url(${(p) => p.$srcImagem});
	object-fit: cover;
	background-size: cover;
	background-position: center;
	height: 230px;
	width: 100%;
	margin-bottom: -10px;
	z-index: -1;
`;
