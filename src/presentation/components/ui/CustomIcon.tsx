import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, useTheme } from '@ui-kitten/components'


interface Props {
    name: string
    color?: string
    isWhite?: boolean
}

const CustomIcon = ({name, color, isWhite = false}: Props) => {
    
    const theme = useTheme()
    if (isWhite) {
        color = theme['color-info-100']
    }else if (!color) {
        color = theme['text-basic-color']
    }else{
        color = theme[color] ?? theme['text-basic-color']
    }


  return (
    <Icon
    style={styles.icon}
    fill={color}
    name={name}
  />
  )
}

export default CustomIcon

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    }
})