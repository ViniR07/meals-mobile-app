import React from "react";
import styled from "styled-components";
import { Icon } from "../UI";
import {
	preto,
	roxoGradiente,
} from "../UI/variaveis";

const NavLi = styled.li`
	list-style: none;
	height: 75px;
	padding: 8px 0 8px 16px;
	display: flex;
	justify-content: start;
	align-iems: center;
`;

const NavLink = styled.a`
	display: flex;
	align-items: center;
	width: 95%;
	height: 100%;
	font-size: 18px;
	padding: 0 16px;
	border-radius: 8px;
	border: solid 1px transparent;

	:hover {
		border: solid 1px ${roxoGradiente};
	}
`;

const NavTitle = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
	color: ${preto};
	margin-left: 1rem;
`;

const NavIcon = styled(Icon)`
	height: 35px;
	width: 35px;
	z-index: 100;
`;

const NavItem = ({ icon, title }) => {
	return (
		<NavLi>
			<NavLink href="/">
				<NavIcon src={icon} />
				<NavTitle>{title}</NavTitle>
			</NavLink>
		</NavLi>
	);
};

export default NavItem;
