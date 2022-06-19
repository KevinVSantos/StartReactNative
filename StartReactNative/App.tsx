import React from  'react';
import Home  from './src/screens/Home';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from  'styled-components/native';

import THEME from './src/theme';

export default function App() {

  //Carrega as fontes. 
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  //Se as fontes ainda não foram carregas, retorna o loading.
  if(!fontsLoaded)
    return <AppLoading/>;

  return (
    <ThemeProvider theme={THEME}>
      <Home/>
    </ThemeProvider>
  );
}
