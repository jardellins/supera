import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { getValue } from "../../context/AddCart";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

const Cart = () => {
  const { total, items, removeCart } = getValue();

  return (
    <View style={styles.container}>
      {total === 0 ? (
        <Text style={styles.infoTitle}>Seu carrinho está vazio!</Text>
      ) : (
        items.map((item, index) => (
          <View key={index} style={styles.cardItem}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => removeCart(item)}
            >
              <Ionicons name="ios-remove" size={24} color="black" />
            </TouchableOpacity>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoTitle: {
    fontFamily: fonts.text,
    fontSize: 25,
  },
  cardItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get('window').width * 0.9,
      backgroundColor: colors.green
  },
});
