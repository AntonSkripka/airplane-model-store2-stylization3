import styled from '@emotion/styled';

export const SectionGlobal = styled.section`
    display: grid;
`

export const TitleLugrasimoBold = styled.h1`
    composes: lugrasimoBold;
    margin-bottom: 24px;
    font-size: 48px;
    text-align: center;
    color: ${props => props.theme.fontColor.mainTitle};
`