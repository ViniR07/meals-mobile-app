import React, { useState } from "react";
import HeaderApp from "../HeaderApp";
import Meal from "../Meal";
import seta from "../../assets/setaVoltar.svg";
import * as S from "./styles";

const RecipeApp = ({ randons }) => {
	const [current, setCurrent] = useState(0);
	const length = randons.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(randons) || randons.length <= 0) {
		return null;
	}
	console.log(current, length);

	return (
		<S.MealsApp>
			<HeaderApp />
			<button disabled={current === 0} onClick={prevSlide}>
				<S.IconNavegationLeft src={seta} />
			</button>
			<S.RandomMeals
				style={{
					transform: `translateX(-${current * (100 / length)}%)`,
				}}
			>
				{randons.map((meal, id) => {
					return (
						<Meal
							style={{
								transform: `${
									current === id ? "scale(1.1)" : "scale(1)"
								}`,
							}}
							titulo={meal.strMeal}
							descricao={meal.strInstructions}
							srcImagem={meal.strMealThumb}
							categoria={meal.strCategory}
							localizacao={meal.strArea}
							key={id}
						/>
					);
				})}
			</S.RandomMeals>
			<button onClick={nextSlide} disabled={current === length - 1}>
				<S.IconNavegationRight src={seta} />
			</button>
		</S.MealsApp>
	);
};

export default RecipeApp;
