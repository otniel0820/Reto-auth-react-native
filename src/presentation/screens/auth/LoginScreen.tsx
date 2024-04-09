import React, { useState } from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {Alert, useWindowDimensions} from 'react-native';
import CustomIcon from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';
import { useAuthStore } from '../../store/auth/useAuthStore';



interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'>{

}

export default function LoginScreen({navigation}: Props) {

  const {login} = useAuthStore()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isPosting, setIsPosting] = useState(false)

  const {height} = useWindowDimensions();
 
  const onLogin = async()=>{
    if (form.email.length === 0 || form.password.length === 0) {
      return
    }
    setIsPosting(true)
    const wasSuccesful = await login(form.email, form.password);
    setIsPosting(false)
    if (wasSuccesful) return

    Alert.alert('Error', 'Usuario o contraseña incorrectos')
  }
 
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
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            accessoryLeft={<CustomIcon name='email-outline'/>}
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            value={form.password}
            onChangeText={password => setForm({...form, password})}
            accessoryLeft={<CustomIcon name='lock-outline'/>}
            style={{marginBottom: 10}}
          />
        </Layout>

        

        {/* Espacio */}
        <Layout style={{height: 20}} />

        {/* Boton */}
        <Layout>
          <Button 
          disabled={isPosting}
          onPress={()=>onLogin()}
          accessoryRight={<CustomIcon name='log-in-outline' isWhite/>}
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
