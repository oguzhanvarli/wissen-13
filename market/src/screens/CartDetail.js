import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { clearCart } from '../store/slices/cartSlice'

const CartDetail = () => {
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch()
  return (
    <View>
      <FlatList 
        data={products}
        renderItem={({item}) => <CartItem item={item} /> }
      />
      <Button title='Clear Cart' onPress={() => dispatch(clearCart())} color={'red'} />
    </View>
  )
}

export default CartDetail

const styles = StyleSheet.create({})