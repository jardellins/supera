import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

import images from '../services/images'

const ListGames = ({ title, price, image }) => {
    
return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <Image
          source={images[title]}
          resizeMode="contain"
          style={styles.image}
        />
        <View>
          <Text>{title}</Text>
          <Text>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListGames;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.25
    }
})