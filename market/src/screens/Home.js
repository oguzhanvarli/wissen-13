import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardComponent from '../components/CardComponent'
import Cart from '../components/Cart'


const Home = ({navigation}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    try {
      axios.get("https://dummyjson.com/products")
        .then(res => setProducts(res.data.products))
    } catch (error) {
      console.log('Get Products Error', error)
    }
  }

  const goToDetail = () => {
    navigation.navigate('CartDetail')
  }

  //console.log(products)
  return (
    <View>
      <Cart goToDetail={goToDetail} />
      <FlatList
        data={products}
        // ListHeaderComponent={
        //   <View>
        //     <Button title='Get Products' onPress={getData} color={'purple'} />
        //   </View>
        // }
        //horizontal={true}
        renderItem={({ item }) => <CardComponent item={item} />}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})