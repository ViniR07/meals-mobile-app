import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getMelsByFilterSearch } from "../../api";
import AoAbrir from "../../contexts/AoAbrir";
import Meal from "../Meal";

const ListDiv = styled.div`
    margin-left: -40px;
`;

const ErrorMessage = styled.p`
    font-size: 1.5rem;
    margin-top: 2.5rem;
    text-align: center;
    padding: 0 2rem 0 5rem;
`;

const ListForCategory = ({ category } ) => {
	const [resultMeals, setResultMeals] = useState({meals: []});
    const aoAbrir = useContext(AoAbrir);

	useEffect(() => {
        if(category) {
            getMelsByFilterSearch(category).then((res) => {
                setResultMeals(res);
            });
        }
	}, [category]);

	return (
		<ListDiv>
			{resultMeals.meals ? resultMeals.meals.map((meal, id) => {
                return (
					<Meal
                        style={{'marginTop': '2rem'}}
						titulo={meal?.strMeal}
						descricao={meal?.strInstructions}
						srcImagem={meal?.strMealThumb}
						categoria={meal?.strCategory}
						localizacao={meal?.strArea}
                        aoAbrir={aoAbrir}
						key={id}
					/>
				);
			}) : <ErrorMessage>Sorry, I couldn't find any meals for this category!</ErrorMessage>}

		</ListDiv>
	);
};

export default ListForCategory;
