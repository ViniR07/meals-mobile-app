import styled from 'styled-components';
import { gradienteAzul, brancoBackground } from '../UI/variaveis';

export const HeaderContainer = styled.div`
    ${gradienteAzul}
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.5rem 6rem 1.5rem;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
`;

export const TituloHeader = styled.h2`
    font-size: 1.5rem;
    color: ${brancoBackground};
    font-family: 'Open Sans';
    font-weight: 600;
`;

export const Icone = styled.img`
    height: 30px;
    width: 30px;
    cursor: pointer;
    filter: invert(100%);
`;