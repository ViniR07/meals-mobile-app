import React, { Suspense, lazy, useState, useReducer } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import HeaderApp from "./components/HeaderApp";
import SearchMeals from "./components/SearchMeals";
import CategoriesMeals from "./components/CategoriesMeals";
import { cinzaBackground, sombra } from "./components/UI/variaveis";
import Modal from "./components/Modal";
import AoAbrir from "./contexts/AoAbrir";

const RandomMealsBox = lazy(() => import("./components/RandomMealsBox"));

const SectionApp = styled.section`
	width: 100vw;
	padding: 4rem 0;
	background-color: #eee;
`;

const MealsApp = styled.div`
	position: relative;
	max-width: 100%;
	overflow: hidden;
	width: 500px;
	margin: 0 auto;
	background-color: ${cinzaBackground};
	${sombra}
	border-radius: 6px;
	padding-bottom: 10rem;

	#header {
		top: -10px;
		left: 0px;
		right: 0px;
		transition: top 0.5s ease-in-out;
	}
	#header.sticky {
		position: fixed;
		top: 0;
		right: 80px;
		left: 100px;
		z-index: 10000;
		padding-bottom: 2rem;

		@media (max-width: 425px) {
			left: 0px;
			right: 10px;
		}
	}
`;

function App() {
	const [search, setSearch] = useState("");
	const [showModal, toggle] = useReducer((state) => !state, false);
	const [modalContent, setModalContent] = useState({});

	function aoEnviar(dado) {
		if (dado) setSearch(dado);
		else setSearch("");
	}

	function aoAbrir(meal) {
		setModalContent(meal);
		toggle(true);
	}

	return (
		<SectionApp>
			<MealsApp>
				<GlobalStyle />
				<AoAbrir.Provider value={aoAbrir}>
					<HeaderApp aoEnviar={aoEnviar} pesquisou={search} />
					{/* <Suspense fallback={<h1>Loading...</h1>}> */}
						{search ? "" : <RandomMealsBox />}
					{/* </Suspense> */}
					{search ? <SearchMeals term={search} /> : ""}
					<CategoriesMeals pesquisou={search} />
					<Modal
						showModal={showModal}
						toggle={toggle}
						{...modalContent}
					/>
				</AoAbrir.Provider>
			</MealsApp>
		</SectionApp>
	);
}

export default App;
