import styled from 'styled-components';
import { gradienteAzul, brancoBackground } from '../UI/variaveis';

export const HeaderContainer = styled.div`
    ${gradienteAzul}
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.5rem 6rem 1.5rem;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
`;

export const TituloHeader = styled.h2`
    font-size: 1.5rem;
    color: ${brancoBackground};
    font-family: 'Open Sans';
    font-weight: 600;
    transition: .4s;
`;

export const Icone = styled.img`
    height: 40px;
    width: 30px;
    cursor: pointer;
    filter: invert(100%);
`;

export const SearchContainer = styled.form`
	height: 40px;
	background-color: ${brancoBackground};
	border-radius: 40px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SearchInput = styled.input`
	border: none;
	background: none;
	outline: none;
	float: left;
	padding: 0;
	font-size: 16px;
	transition: 0.4s;
	width: 0px;

	&:hover {
		width: 300px;
		padding: 0 6px;
	}
`;

export const SearchIconBtn = styled.a`
	float: right;
	background-color: transparent;
	border: none;
	width: 40px;
	border-radius: 50%;
`;