import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMealsCategories } from "../../api";
import CategoryMeals from "../CategoryMeals";
import { BotaoTerciario } from "../UI";
import { roxoGradiente } from "../UI/variaveis";

const CategoriesContainer = styled.div`
	padding: 0 0.5rem;
	text-align: center;
    margin-top: 4rem;

	.active {
		transform: scale(0.97);
		color: white;
		box-shadow: inset 0 -100px 0 0 ${roxoGradiente};
	}
`;

const ContainerTitle = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 1.5rem;
`;

const CategoriesMeals = ({ pesquisou }) => {
	const [categories, setCategories] = useState([]);
	const [showCategory, setShowCategory] = useState("");

	function handleCategory(e) {
		const value = e.target.textContent;
		if (value === showCategory) {
			setShowCategory("");
		} else {
			setShowCategory(value);
		}
	}

	useEffect(() => {
		getMealsCategories().then((resp) => {
			setCategories(resp.categories);
		});
	}, []);

	return (
		<CategoriesContainer >
			<ContainerTitle>Categories</ContainerTitle>
			{categories.map((resp, id) => {
				return (
					<BotaoTerciario
						className={
							showCategory === resp.strCategory ? "active" : ""
						}
						onClick={handleCategory}
                        key={id}
					>
						{resp.strCategory}
					</BotaoTerciario>
				);
			})}
			{showCategory ? <CategoryMeals title={showCategory} /> : ""}
		</CategoriesContainer>
	);
};

export default CategoriesMeals;
