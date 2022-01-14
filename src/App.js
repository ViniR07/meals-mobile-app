import React, { useEffect, useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";
import RandomMealsBox from "./components/RandomMealsBox";
import { getRandomMeals } from "./api";
import HeaderApp from "./components/HeaderApp";
import { cinzaBackground, sombra } from "./components/UI/variaveis";

const SectionApp = styled.section`
    width: 100vw;
    heigth: 100vh;
    padding: 4rem 0;
    background-color: #eee;
`;

const MealsApp = styled.div`
	position: relative;
	max-width: 100%;
	width: 500px;
	height: 1000px;
	margin: 0 auto;
	background-color: ${cinzaBackground};
	${sombra}
	border-radius: 6px;
	overflow: hidden;
`;

function App() {
    const [random, setRandom] = useState([]);
    useEffect( () => {
        const qtd = 5;
        const randons = [];
        getRandomMeals(qtd).then((meals) => {
            for (let i = 0; i < qtd; i++) {
                randons.push(meals[i].meals[0]);
            }
            setRandom(randons);
        });
    }
    , [])

	return (
		<SectionApp>
            <GlobalStyle />
            <MealsApp>
                <HeaderApp />
                <RandomMealsBox randons={random} />
            </MealsApp>

        </SectionApp>
	);
}

export default App;
