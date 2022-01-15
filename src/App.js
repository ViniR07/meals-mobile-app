import React, { Suspense, lazy, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import HeaderApp from "./components/HeaderApp";
import SearchMeals from "./components/SearchMeals";
import CategoriesMeals from "./components/CategoriesMeals";
import { cinzaBackground, sombra } from "./components/UI/variaveis";

const RandomMealsBox = lazy(() => import("./components/RandomMealsBox"));

const SectionApp = styled.section`
	width: 100vw;
	padding: 4rem 0;
	background-color: #eee;
`;

const MealsApp = styled.div`
	position: relative;
	max-width: 100%;
	width: 500px;
	margin: 0 auto;
	background-color: ${cinzaBackground};
	${sombra}
	border-radius: 6px;
	overflow: hidden;
	padding-bottom: 10rem;
`;

function App() {
	const [search, setSearch] = useState("");

	function aoEnviar(dado) {
		if (dado) setSearch(dado);
        else setSearch('');
    console.log(dado);

	}

	return (
		<SectionApp>
			<GlobalStyle />
			<MealsApp>
				<HeaderApp aoEnviar={aoEnviar} pesquisou={search} />
				<Suspense fallback={<h1>Loading...</h1>}>
                    {search ? '' :  <RandomMealsBox />}
				</Suspense>
				{search ? <SearchMeals term={search} /> : ""}
				<CategoriesMeals pesquisou={search} />
			</MealsApp>
		</SectionApp>
	);
}

export default App;
