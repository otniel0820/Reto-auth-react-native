import React from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';
import CustomIcon from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'>{

}

export default function LoginScreen({navigation}: Props) {
  const {height} = useWindowDimensions();

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.30}}>
          <Text category="h1">Crear Cuenta</Text>
          <Text category="p2">Por favor crea una cuenta para continuar</Text>
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Nombre completo"
            autoCapitalize="none"
            accessoryLeft={<CustomIcon name='person-outline'/>}
            style={{marginBottom: 10}}
          />
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
          >Crear</Button>
        </Layout>

        {/* Informacioc para crear cuenta */}
        <Layout style={{height: 50}} />

        <Layout style={{
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <Text>¿Ya tienes cuenta?</Text>
          <Text 
          status='primary' 
          category='s1'
          onPress={()=>navigation.goBack()}
          >{' '}Ingresar</Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
}
