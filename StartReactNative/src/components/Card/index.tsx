import React from  'react';
import { Container, Image, Title, Description } from './styles';

import poroImg from  '../../assets/poro.png';

export function Card()
{
    return(
        <Container animation='slideInDown' duration={2000}>
            <Image  source={poroImg} 
                    resizeMode='contain' 
                    animation={'pulse'} delay={100} 
                    iterationCount='infinite'/>

            <Title> O PORO MAIS FOFO</Title>

            <Description> Amigo de Braum</Description>
        </Container>
    );
}