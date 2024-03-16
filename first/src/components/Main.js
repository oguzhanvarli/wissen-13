import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Main = (props) => {
  let {mainText} = props
  const [counter, setCounter] = useState(0)

  console.log('merahaba ben render oldum')

  const increment = () => {
    if(counter < 10){
      setCounter(counter + 1)
    }
  }
  const decremant = () => {
    if(counter > 0) setCounter(counter - 1)
    
  }

  return (
    <View>
      <Text>{mainText}</Text>
      <Text style={styles.counterText}>{counter}</Text>
      <Button title='-' onPress={decremant} />
      <Button title='+' onPress={increment} />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  counterText : {
    color: 'green',
    fontSize: 40,
    textAlign: 'center'
  }
})