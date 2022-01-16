import styled from "styled-components";
import { gradienteAzul, roxoGradiente } from "./variaveis";

export const Botao = styled.button`
	font-size: 18px;
	display: inline-block;
	outline: 0;
	border: 0;
	cursor: pointer;
	will-change: box-shadow, transform;
	${gradienteAzul}
	box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
	padding: 0 2em;
	border-radius: 0.3em;
	color: #fff;
	height: 2.6em;
	text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
	transition: box-shadow 0.15s ease, transform 0.15s ease;

	:hover {
		box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
			0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%),
			inset 0px -0.1em 0px #3c4fe0;
		transform: translateY(-0.1em);
	}

	:active {
		box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
		transform: translateY(0em);
	}
`;

export const BotaoSecundario = styled.button`
	align-items: center;
	${gradienteAzul}
	border: 0;
	border-radius: 8px;
	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
	box-sizing: border-box;
	color: #ffffff;
	display: flex;
	font-family: Phantomsans, sans-serif;
	font-size: 16px;
	justify-content: center;
	line-height: 1em;
	max-width: 100%;
	min-width: 140px;
	padding: 3px;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	white-space: nowrap;
	cursor: pointer;
	transition: all 0.3s;

	:active,
	:hover {
		outline: 0;
	}

	.span {
		background-color: rgb(5, 6, 45);
		padding: 16px 24px;
		border-radius: 6px;
		width: 100%;
		height: 100%;
		transition: 300ms;
	}

	:hover .span {
		background: none;
	}

	:active {
		transform: scale(0.9);
	}
`;

export const BotaoTerciario = styled.button`
	position: relative;
	display: inline-block;
	margin: 10px;
	padding: 15px 30px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 1px;
	text-decoration: none;
	color: ${roxoGradiente};
	background: transparent;
	cursor: pointer;
	transition: ease-out 0.5s;
	border-radius: 30px;
	border: 2px solid ${roxoGradiente};
	border-radius: 10px;
	box-shadow: inset 0 0 0 0 ${roxoGradiente};

	:hover {
		color: white;
		box-shadow: inset 0 -100px 0 0 ${roxoGradiente};
	}

	:active {
		transform: scale(0.9);
	}
`;

export const Icon = styled.img`
	height: 30px;
	width: 30px;
	cursor: pointer;
`;

export const WhiteIcon = styled(Icon)`
	height: 35px;
	width: 35px;
	filter: invert(100%);
`;
