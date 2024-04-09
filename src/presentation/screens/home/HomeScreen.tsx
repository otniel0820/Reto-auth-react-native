import React from 'react';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import { useAuthStore } from '../../store/auth/useAuthStore';

export default function HomeScreen() {
  const { logout } = useAuthStore()
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>

      <Button 
      onPress={logout}
      accessoryLeft={<Icon name="log-out-outline" />}>
        Cerrar sesion
      </Button>
    </Layout>
  );
}
