import React, { Suspense } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import RandomMealsBox from "./components/RandomMealsBox";
import HeaderApp from "./components/HeaderApp";
import CategoriesMeals from "./components/CategoriesMeals";
import { cinzaBackground, sombra } from "./components/UI/variaveis";

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
`;

function App() {
	return (
		<SectionApp>
			<GlobalStyle />
			<MealsApp>
				<HeaderApp aoEnviar={aoEnviar} />
                <Suspense fallback={<h1 style={{'position': 'absolute', 'top': '12px'}}>Loading...</h1>} >
				    <RandomMealsBox />
                </Suspense>
				<CategoriesMeals />
			</MealsApp>
		</SectionApp>
	);
}

function aoEnviar(dado) {
	console.log(dado);
}

export default App;
