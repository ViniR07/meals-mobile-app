import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMelsByFilterSearch } from "../../api";
import Meal from "../Meal";

const SearchTitle = styled.h1`
	margin-top: 1.5rem;
	font-size: 2rem;
	text-align: center;
`;

const SearchMealsContainer = styled.div`
	padding-left: 2rem;
`;

const SearchMeals = ({ term }) => {
	const [searchMeals, setSearchMeals] = useState("");

	useEffect(() => {
		getMelsByFilterSearch(term).then((resp) => {
			setSearchMeals(resp);
		});
	});

	console.log(searchMeals);
	return (
		<SearchMealsContainer>
			<SearchTitle>Search Results</SearchTitle>
			{searchMeals
				? searchMeals.meals.map((meal, id) => {
						return (
							<Meal
								style={{ marginTop: "2rem" }}
								titulo={meal?.strMeal}
								descricao={meal?.strInstructions}
								srcImagem={meal?.strMealThumb}
								categoria={meal?.strCategory}
								localizacao={meal?.strArea}
								key={id}
							/>
						);
				  })
				: ""}
		</SearchMealsContainer>
	);
};

export default SearchMeals;
