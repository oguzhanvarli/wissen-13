import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Header = (props) => {

  console.log(props)

  const [fullname, setFullName] = useState("Oğuzhan")


  let name = "Oğuzhan"
  data = []

  const changeName = () => {
    // console.log('worked')
    // name = "Oğuzhan Varlı"
    // console.log(name)
    setFullName("Oğuzhan Varlı")
  }

  return (
    <View>
      <Text>{props.isim}</Text>
      <Text style={styles.name}>{fullname}</Text>
      <Button title="Click" onPress={changeName} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  name: {
    fontSize: 40,
    color: 'red',
    textAlign: 'center'
  }
})