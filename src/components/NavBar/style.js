import styled from "styled-components";
import { Icon } from "../UI";
import { brancoBackground } from "../UI/variaveis";

export const Nav = styled.nav`
	background-color: ${brancoBackground};
	width: 250px;
	height: 725px;
	z-index: 1000;
	position: absolute;
	display: flex;
	justify-content: center;
	left: -100%;
	top: 0;
	transition: 0.7s;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;

export const NavUl = styled.ul`
	padding: 2rem 0;
	width: 100%;
	z-index: 10000;
`;

export const NavProfile = styled.li`
	margin: 1.5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ProfileIcon = styled(Icon)`
	height: 70px;
	width: 70px;
`;

export const ProfileText = styled.span`
	margin-top: 1rem;
	font-size: 1.7rem;
	font-weight: 600;
`;
