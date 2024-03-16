import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import Main from './src/components/Main'
import Footer from './src/components/Footer'

const App = () => {

  let headerText = 'Merhaba Ben Header'
  let mainText = 'Merhaba Ben Main'
  let footerText = 'Merhaba Ben Footer'

  return (
    // <View style={{backgroundColor: 'blue', height: 500}}>
    //   <Text style={styles.myText}>App</Text>
    // </View>
    <>
      <Header isim={headerText} />
      <Main mainText={mainText} />
      <Footer footerText={footerText} />
    </>
  )
}

export default App

const styles = StyleSheet.create({
  myText: {
    fontSize: 40,
    color: "red",
    textAlign: 'center'
  }
})