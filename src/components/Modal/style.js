import styled from "styled-components";
import { Icon } from "../UI";
import {
	brancoBackground,
	fonteSecundaria,
	preto,
	sombra,
} from "../UI/variaveis";

export const Background = styled.div`
	width: 100%;
	background: #000000d1;
	position: absolute;
	inset: 0;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: start;
	padding: 2rem 0;
`;

export const ModalContainer = styled.div`
	width: 450px;
	${sombra}
	background: ${brancoBackground};
	color: ${preto};

	position: relative;
	z-index: 10;
	border-radius: 10px;
	overflow: hidden;
`;

export const ModalHeader = styled.header`
	width: 100%;
`;

export const ModalImg = styled.img`
	width: 450px;
	height: 350px;
	object-fit: cover;
`;

export const ModalMain = styled.main`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ModalTitle = styled.h2`
	font-size: 2.2rem;
	text-align: center;
`;

export const ModalDescription = styled.span`
	margin: 2rem 0;
	font-weigth: 400;
	font-family: ${fonteSecundaria};
`;

export const CloseButton = styled(Icon)`
	position: absolute;
	top: 0px;
	right: 5px;
	width: 50px;
	height: 50px;
`;
