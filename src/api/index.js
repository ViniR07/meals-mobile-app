import axios from "axios";

const URL_RANDOM = "https://www.themealdb.com/api/json/v1/1/random.php";
const URL_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php";

const conectaApi = (url, options = {}) => {
	return axios
		.get(url)
		.then( res => {
			const dados = res.data;
            console.log(res);
			return dados;
		})
		.catch((erro) => console.log(erro));
};

export const getRandomMeal = async () => {
	const random = await conectaApi(URL_RANDOM);
	console.log(random);
	return random;
};

export const getRandomMeals = async (qtd) => {
    const randons = [];
    for(let i = 0; i < qtd; i++) {
        const random = await conectaApi(URL_RANDOM);
        randons.push(random);
    }
    return randons
};

export const getMealsCategories = () => {
	const categories = conectaApi(URL_CATEGORIES);
	console.log(categories);
	return categories;
};

export const getMealsByFilterCategory = (category) => {
	const meals = conectaApi(
		`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
	);
	console.log(meals);
	return meals;
};

export const getMelsByFilterSearch = (search) => {
	const meals = conectaApi(
		`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
	);
	console.log(meals);
	return meals;
};
