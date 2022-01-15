import React, { useState } from "react";
import styled from "styled-components";
import icons from '../../assets'
import { Icon, WhiteIcon } from "../UI";
import NavItem from "../NavItem";
import {
	brancoBackground,
	gradienteAzul,
	roxoGradiente,
} from "../UI/variaveis";

const Nav = styled.nav`
	background-color: ${brancoBackground};
	width: 250px;
	height: 725px;
	z-index: 1000;
	position: absolute;
	display: flex;
	justify-content: center;
	left: -100%;
	top: 0;
	transition: 0.85s;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;

const NavUl = styled.ul`
	padding: 2rem 0;
	width: 100%;
	z-index: 10000;
`;

const NavProfile = styled.li`
margin: 1.5rem 0;
    display: flex; 
    flex-direction: column;
    align-items: center;
    
`;

const ProfileIcon = styled(Icon)`
    height: 70px;
    width: 70px;
`;

const ProfileText = styled.span`
    margin-top: 1rem;
	font-size: 1.7rem;
	font-weight: 600;
`;

const NavBar = () => {
	const [sidebar, setSidebar] = useState(false);

	function showSidebar() {
		setSidebar(!sidebar);
	}

	console.log(sidebar);
	return (
		<>
			<WhiteIcon src={icons.menuHamburguer} onClick={showSidebar} />

			<Nav style={{ 'left': `${sidebar ? "0%" : "-100%"}` }}>
				<NavUl>
					<Icon  src={icons.remove} onClick={showSidebar} />
					<NavProfile>
						<ProfileIcon src={icons.account}  />
						<ProfileText>Username</ProfileText>
					</NavProfile>
					<NavItem title={"Home"} icon={icons.home} />
					<NavItem title={"Log On"} icon={icons.login} />
					<NavItem title={"Sign Up"} icon={icons.identidade} />
					<NavItem title={"Favorites"} icon={icons.favorite} />
					<NavItem title={"About"} icon={icons.info} />
					<NavItem title={"Settings"} icon={icons.settings} />
				</NavUl>
			</Nav>
		</>
	);
};

export default NavBar;
