import React from "react";
import { Botao, Icon } from "../UI";
import IconTalheres from '../../assets/talheres.svg';
import iconLocalizacao from '../../assets/localizacao.svg';
import * as S from './styles';

const Meal = ({
	titulo,
	descricao,
	srcImagem,
	categoria,
	localizacao,
	style,
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
						<Icon src={IconTalheres} />
						<span style={{ marginLeft: 5 }}>{categoria}</span>
					</S.IconBox>
					<S.IconBox>
						<Icon src={iconLocalizacao} />
						<span style={{ marginLeft: 5 }}>{localizacao}</span>
					</S.IconBox>
				</S.IconDiv>
				<S.TextCard>{descricao.substring(0, 120) + "..."}</S.TextCard>
				<Botao>Receita Completa</Botao>
			</S.MainCard>
		</S.MealCard>
	);
};

export default Meal;
