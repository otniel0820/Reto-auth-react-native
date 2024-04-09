import React, { useState } from 'react';
import {Button, Input, Layout, Popover, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {Alert, useWindowDimensions} from 'react-native';
import CustomIcon from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'>{
  
}

export default function LoginScreen({navigation}: Props) {

  const {register} = useAuthStore()
  const [isVisible, setIsVisible] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: ''
  })
  const [isPosting, setIsPosting] = useState(false)

  const {height} = useWindowDimensions();

  const onRegister = async()=>{
    if (form.email.length === 0 || form.password.length === 0) {
      return
    }
    setIsPosting(true)
    const wasSuccesful = await register(form.email, form.password, form.fullName);
    setIsPosting(false)
    if (wasSuccesful) {
      
      setIsVisible(true)
      setTimeout(() => {
        navigation.navigate('LoginScreen');
        
      }, 2000);
      return
    }

    Alert.alert('Error', 'Debe introducir correo o contraseña valida')
  }

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
      <Popover
        style={{backgroundColor: 'rgba(0, 255, 0, 0.5)', padding: 16, marginTop: 10}}
        anchor={()=> <Layout/>}
        visible={isVisible}
        onBackdropPress={()=>setIsVisible(false)}
        >
          <Text style={{color: 'white', fontSize: 20}}>Usuario creado exitosamente</Text>
        </Popover>
        <Layout style={{paddingTop: height * 0.30}}>
          <Text category="h1">Crear Cuenta</Text>
          <Text category="p2">Por favor crea una cuenta para continuar</Text>
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Nombre completo"
            autoCapitalize="none"
            value={form.fullName}
            onChangeText={fullName => setForm({...form, fullName})}
            accessoryLeft={<CustomIcon name='person-outline'/>}
            style={{marginBottom: 10}}
          />
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
          onPress={()=> onRegister()}
          accessoryRight={<CustomIcon name='arrow-forward-outline' isWhite/>}
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
