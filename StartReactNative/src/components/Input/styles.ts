import styled from 'styled-components/native';

export const Container = styled.TextInput`
    height:54px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    color: ${({theme}) => theme.COLORS.PRIMARY_TEXT};
    margin: 10px 20px;
    padding: 0 16px;
`;
