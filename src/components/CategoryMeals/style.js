import styled from "styled-components";
import { fonteSecundaria, roxoGradiente } from "../UI/variaveis";


export const CategoriesTitle = styled.h1`
	margin: 2rem 0;
	text-align: center;
	font-size: 2.4rem;
	text-decoration: underline ${roxoGradiente};
`;

export const CategoriesDescription = styled.p`
	font-size: 1rem;
	font-family: ${fonteSecundaria};
	margin: 1rem 0 2rem 0;
	padding: 0 2rem;
`;

export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;