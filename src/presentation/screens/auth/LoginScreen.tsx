import React from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';
import CustomIcon from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';
import { API_URL, STAGE } from '@env';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'>{

}

export default function LoginScreen({navigation}: Props) {
  const {height} = useWindowDimensions();
 
 
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor ingresae para continuar</Text>
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<CustomIcon name='email-outline'/>}
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            accessoryLeft={<CustomIcon name='lock-outline'/>}
            style={{marginBottom: 10}}
          />
        </Layout>

        {/* Espacio */}
        <Layout style={{height: 20}} />

        {/* Boton */}
        <Layout>
          <Button 
          onPress={() => {}}
          accessoryRight={<CustomIcon name='arrow-forward-outline'/>}
          >Ingresar</Button>
        </Layout>

        {/* Informacioc para crear cuenta */}
        <Layout style={{height: 50}} />

        <Layout style={{
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <Text>¿No tienes cuenta?</Text>
          <Text 
          status='primary' 
          category='s1'
          onPress={()=>navigation.navigate('RegisterScreen')}
          >{' '}Crea una aqui</Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
}
