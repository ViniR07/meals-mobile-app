import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMelsByFilterSearch } from "../../api";
import Meal from "../Meal";

const ListDiv = styled.div`
    margin-left: -40px;
`;

const ListForCategory = ({ category } ) => {
	const [resultMeals, setResultMeals] = useState({meals: []});
    
	useEffect(() => {
        if(category) {
            console.log(category);
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
						key={id}
					/>
				);
			}) : ''}

		</ListDiv>
	);
};

export default ListForCategory;
