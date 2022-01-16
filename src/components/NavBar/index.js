import React, { useState } from "react";
import icons from "../../assets";
import { Icon, WhiteIcon } from "../UI";
import NavItem from "../NavItem";
import * as S from "./style";

const NavBar = () => {
	const [sidebar, setSidebar] = useState(false);

	function showSidebar() {
		setSidebar(!sidebar);
	}

	return (
		<>
			<WhiteIcon src={icons.menuHamburguer} onClick={showSidebar} />

			<S.Nav style={{ left: `${sidebar ? "0%" : "-100%"}` }}>
				<S.NavUl>
					<Icon src={icons.remove} onClick={showSidebar} />
					<S.NavProfile>
						<S.ProfileIcon src={icons.account} />
						<S.ProfileText>Username</S.ProfileText>
					</S.NavProfile>
					<NavItem title={"Home"} icon={icons.home} />
					<NavItem title={"Log On"} icon={icons.login} />
					<NavItem title={"Sign Up"} icon={icons.identidade} />
					<NavItem title={"Favorites"} icon={icons.favorite} />
					<NavItem title={"About"} icon={icons.info} />
					<NavItem title={"Settings"} icon={icons.settings} />
				</S.NavUl>
			</S.Nav>
		</>
	);
};

export default NavBar;
