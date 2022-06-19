import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
    align-items: center;

    width: 180px;
    height:250px;

    background-color: ${({theme}) => theme.COLORS.PRIMARY_900};

    margin: 0 10px;

    border-radius: 20px;
`;


export const Image = styled(Animatable.Image)`
    margin-top: -50px;
    height:150px;
    width:150px;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.SECONDARY_TEXT};
    font-family: ${({theme}) => theme.FONTS.BOLD};
`

export const Description = styled.Text`
    color: ${({theme}) => theme.COLORS.SECONDARY_TEXT};
    font-family: ${({theme}) => theme.FONTS.REGULAR};
    padding-top: 40px;
`