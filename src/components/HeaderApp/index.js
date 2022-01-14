import React from "react";
import menu from "../../assets/menuHamburguer.svg";
import lupa from "../../assets/lupa.svg";
import * as S from "./styles";

const HeaderApp = () => {
	return (
		<S.HeaderContainer>
			<S.Icone src={menu} />
			<S.TituloHeader>VD Receitas</S.TituloHeader>
			<S.Icone src={lupa} alt="icone lupa pesquisa" />
		</S.HeaderContainer>
	);
};

export default HeaderApp;
