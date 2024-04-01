import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode } from 'jwt-decode'
// import "core-js/stable/atob";


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Splash = ({navigation}) => {

  useEffect(() => {
    handleToken()
  }, [])

  const handleToken = async () => {
    const token = await AsyncStorage.getItem('access_token')
    //let decodedToken = jwtDecode(token)
    let decodedToken = {
      id: 15,
      username: "kminchelle",
      iat: 1710667845,
      exp: 1710671445
    }
    const date = new Date()
    let timeSecond = date.getTime() / 1000
    if(decodedToken.exp > timeSecond){
      setTimeout(() => {
        navigation.navigate("Home")
      }, 1500);
    }else{
      navigation.navigate('Login')
    }
    

  }


  const decodeToken = (value) => {
    console.log(value, 'woken')
    let token = jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMDY1Nzc4MywiZXhwIjoxNzEwNjYxMzgzfQ.bIyEMsoZNNIUkMliqhJc8WW8W_Po6IMqMiSAqyFPWEY")
    console.log(token)
  }


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "https://www.muratcanozdemir.com.tr/wp-content/uploads/2022/09/wissen_featured.jpg" }} />
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