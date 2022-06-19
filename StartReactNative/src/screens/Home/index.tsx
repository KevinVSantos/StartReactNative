import React from  'react';

import { Container, Header, Content } from './styles';

import { Input } from '../../components/Input';

import { Card } from '../../components/Card';

import vexImg from '../../assets/vex.jpg';

export default function Home()
{
    return (
        <Container>
            <Header source={vexImg}>
                <Input placeholder='Pesquisar...'/>
            </Header>
            <Content>
                <Card/>
            </Content>
        </Container>
    );
}