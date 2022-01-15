import * as S from "./styles";
import React, { useState } from "react";
import icons from "../../assets/index";
import { Icon } from "../UI";
import NavBar from "../NavBar";


const HeaderApp = ({ aoEnviar, pesquisou }) => {
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
		<S.HeaderContainer style={{'paddingBottom': `${pesquisou ? '2rem' : '6rem'}`}}>
			<NavBar />

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
				<S.SearchIconBtn onClick={handleClick}>
					<Icon src={icons.lupa} />
				</S.SearchIconBtn>
			</S.SearchContainer>
		</S.HeaderContainer>
	);
};

export default HeaderApp;
