import menu from "../../assets/menuHamburguer.svg";
import * as S from "./styles";
import React, { useState } from "react";
import lupa from "../../assets/lupa.svg";
import { Icon } from "../UI";


const HeaderApp = ({ aoEnviar }) => {
	const [click, setClick] = useState(false);

	function handleClick() {
		setClick(!click);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const valor = e.target.querySelector("input").value;
		aoEnviar(valor);
		e.target.reset();
	}

	return (
		<S.HeaderContainer>
			<S.Icone src={menu} />
			<S.TituloHeader
				style={{ display: `${click ? "none" : "inherit"}` }}
			>
				VD Receitas
			</S.TituloHeader>
			<S.SearchContainer onSubmit={handleSubmit}>
				<S.SearchInput
					type="text"
					placeholder="Qual o prato de hoje?"
					style={{ width: `${click ? "220px" : "0px"}` }}
				/>
				<S.SearchIconBtn href="#" onClick={handleClick}>
					<Icon src={lupa} />
				</S.SearchIconBtn>
			</S.SearchContainer>
		</S.HeaderContainer>
	);
};

export default HeaderApp;
