import React from "react";
import { Botao, Icon } from "../UI";
import icons from '../../assets';
import * as S from './styles';

const Meal = ({
	titulo,
	descricao,
	srcImagem,
	categoria,
	localizacao,
	style,
    aoAbrir
}) => {
	return (
		<S.MealCard style={style}>
			<S.HeaderCard>
				<S.RecipeImage $srcImagem={srcImagem} />
			</S.HeaderCard>
			<S.MainCard>
				<h2>{titulo}</h2>
				<S.IconDiv>
					<S.IconBox>
						<Icon src={icons.talheres} />
						<span style={{ marginLeft: 5 }}>{categoria}</span>
					</S.IconBox>
					<S.IconBox>
						<Icon src={icons.localizacao} />
						<span style={{ marginLeft: 5 }}>{localizacao}</span>
					</S.IconBox>
				</S.IconDiv>
				<S.TextCard>{descricao.substring(0, 120) + "..."}</S.TextCard>
				<Botao onClick={ e => aoAbrir({titulo, srcImagem, localizacao, categoria, descricao})}>Complete Recipe</Botao>
			</S.MainCard>
		</S.MealCard>
	);
};

export default Meal;
