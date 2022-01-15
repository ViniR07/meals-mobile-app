import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMealsCategories } from "../../api";
import CategoryMeals from "../CategoryMeals";

const CategoriesContainer = styled.div`
	padding: 0 0.5rem;
	text-align: center;
	margin-top: 600px;
`;


const CategoriesMeals = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getMealsCategories().then( resp => {
            setCategories(resp.categories);
        })
    }, [])
    
    console.log(categories);
	return (
		<CategoriesContainer>
			{categories.map((resp, cat) => {
               return <CategoryMeals title={resp.strCategory} description={resp.strCategoryDescription} />
            })}
		</CategoriesContainer>
	);
};

export default CategoriesMeals;
