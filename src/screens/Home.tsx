import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

// Components
import ProductItems from '../components/ProductItems'
import Seperator from '../components/Seperator'

// Data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackParamList,"Home">

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItems product={item} />
          </Pressable>
        )}
      />
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',

    padding:12,
    backgroundColor:'#ffffff'
  }
})