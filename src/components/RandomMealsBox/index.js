import React, { useEffect, useState } from "react";
import Meal from "../Meal";
import icons from '../../assets'
import * as S from "./styles";
import { getRandomMeals } from "../../api";

const RandomMealsBox = () => {
    const [random, setRandom] = useState([]);
	const [current, setCurrent] = useState(0);
	const length = random.length;

    useEffect( () => {
        const qtd = 5;
        const randons = [];
        getRandomMeals(qtd).then((meals) => {
            console.log(meals);
            for (let i = 0; i < qtd; i++) {
                randons.push(meals[i].meals[0]);
            }
            setRandom(randons);
        });
    }, [])

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(random) || random.length <= 0) {
		return null;
	}

	return (
		<>
			<button
				style={{ margin: "-800px" }}
				disabled={current === 0}
				onClick={prevSlide}
			>
				<S.IconNavegationLeft src={icons.setaVoltar} />
			</button>
			<S.RandomMeals
				style={{
					transform: `translateX(-${current * (100 / length)}%)`,
				}}
			>
				{random.map((meal, id) => {
					return (
						<Meal
							style={{
								transform: `${
									current === id ? "scale(1.1)" : "scale(1)"
								}`,
							}}
							titulo={meal?.strMeal}
							descricao={meal?.strInstructions}
							srcImagem={meal?.strMealThumb}
							categoria={meal?.strCategory}
							localizacao={meal?.strArea}
							key={id}
						/>
					);
				})}
			</S.RandomMeals>
			<button onClick={nextSlide} disabled={current === length - 1}>
				<S.IconNavegationRight src={icons.setaVoltar} />
			</button>
		</>
	);
};

export default RandomMealsBox;

