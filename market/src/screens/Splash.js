import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Splash = () => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri : "https://www.muratcanozdemir.com.tr/wp-content/uploads/2022/09/wissen_featured.jpg"}} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: width,
    height: height / 2,
    objectFit: "contain"
  }
})