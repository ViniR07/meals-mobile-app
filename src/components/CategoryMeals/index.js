import React, { Suspense, lazy, useReducer } from 'react';
import { BotaoSecundario } from '../UI';
import { CategoriesTitle, CategoryContainer } from './style';

const CategoryList = lazy(() => import('../CategoryList'))

const CategoryMeals = ({ title }) => {
    const [showMore, setShowMore] = useReducer(state => !state ,false);

    return(
        <CategoryContainer>
				<CategoriesTitle>{title}</CategoriesTitle>
				<BotaoSecundario onClick={setShowMore}>
					<span className="span">{showMore ? 'Close Meals' : 'View Meals'}</span>
				</BotaoSecundario>
                <Suspense fallback={<h1>Loading...</h1>}>
                    {showMore ? <CategoryList category={title} /> : ''}
                </Suspense>
				
		</CategoryContainer>
    );
};

export default CategoryMeals;