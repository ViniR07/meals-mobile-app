import React, { Suspense, lazy, useReducer } from 'react';
import { BotaoSecundario } from '../UI';
import { CategoriesTitle, CategoryContainer } from './style';

const ListForCategory = lazy(() => import('../ListForCategory'))

const CategoryMeals = ({ title }) => {
    const [showMore, setShowMore] = useReducer(state => !state ,false);

    console.log(title);
    return(
        <CategoryContainer>
				<CategoriesTitle>{title}</CategoriesTitle>
				<BotaoSecundario onClick={setShowMore}>
					<span className="span">{showMore ? 'Close Meals' : 'View Meals'}</span>
				</BotaoSecundario>
                <Suspense fallback={<h1>Loading...</h1>}>
                    {showMore ? <ListForCategory category={title} /> : ''}
                </Suspense>
				
		</CategoryContainer>
    );
};

export default CategoryMeals;