import React, { useEffect, useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";
import RecipeApp from "./components/RecipeApp";
import { getRandomMeals } from "./api";

const SectionApp = styled.section`
    width: 100vw;
    heigth: 100vh;
    padding: 4rem 0;
    background-color: #eee;
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
			<RecipeApp randons={random} />
        </SectionApp>
		
	);
}

export default App;
