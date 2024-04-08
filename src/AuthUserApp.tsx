import 'react-native-gesture-handler';

import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigation} from './presentation/navigation/StackNavigation';
import {useColorScheme} from 'react-native';

export default function AuthUserApp() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? eva.dark : eva.light;
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={theme}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ApplicationProvider>
    </>
    
  );
}
