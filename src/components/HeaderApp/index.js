import * as S from "./styles";
import React, { useEffect, useState } from "react";
import icons from "../../assets/index";
import { Icon } from "../UI";
import NavBar from "../NavBar";

const HeaderApp = ({ aoEnviar, pesquisou }) => {
	const [click, setClick] = useState(false);
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 10) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};
	}, []);

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
		<S.HeaderContainer
			className={sticky ? "sticky" : null}
			id="header"
			style={{
				paddingBottom: `${
					pesquisou || window.scrollY > 10 ? "2rem" : "6rem"
				}`,
			}}
		>
			<NavBar />

			<S.TituloHeader
				style={{ display: `${click ? "none" : "inherit"}` }}
			>
				VD Meals
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
