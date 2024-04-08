import React from 'react'
import { Button, Icon, Layout, Text } from '@ui-kitten/components'

export default function HomeScreen() {
  return (
    <Layout>
      
      <Text>HomeScreen</Text>


      <Button
      accessoryLeft={<Icon name='facebook'/>}
      >
        Cerrar sesion
      </Button>
    </Layout>

  )
}