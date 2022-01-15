import React, { useReducer } from 'react';
import styled from 'styled-components'
import ListForCategory from '../ListForCategory';
import { BotaoSecundario } from '../UI';
import { fonteSecundaria, roxoGradiente } from '../UI/variaveis';


const CategoriesTitle = styled.h1`
	margin-top: 2rem;
	text-align: center;
	font-size: 2.4rem;
	text-decoration: underline ${roxoGradiente};
`;

const CategoriesDescription = styled.p`
	font-size: 1rem;
	font-family: ${fonteSecundaria};
	margin: 1rem 0 2rem 0;
	padding: 0 2rem;
`;

const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CategoryMeals = ({ title, description }) => {
    const [showMore, setShowMore] = useReducer(state => !state ,false);

    console.log(title);
    return(
        <CategoryContainer>
				<CategoriesTitle>{title}</CategoriesTitle>
				<CategoriesDescription>
					{description}
				</CategoriesDescription>
				<BotaoSecundario onClick={setShowMore}>
					<span className="span">{showMore ? 'Fechar Meals' : 'Vizualizar Meals'}</span>
				</BotaoSecundario>
                {showMore ? <ListForCategory category={title} /> : ''}
				
		</CategoryContainer>
    );
};

export default CategoryMeals;