import React, { useState, useEffect } from "react";
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
  const [delivery, setDelivery] = useState(true);

  const { total, items, removeCart, countItems } = getValue();

  useEffect(() => {
    if (total < 250) {
      setDelivery(true);
    } else {
      setDelivery(false);
    }
  }, [total, items]);

  return (
    <View style={styles.container}>
      {total === 0 ? (
        <Text style={styles.infoTitle}>Seu carrinho está vazio!</Text>
      ) : (
        <>
          <Text style={styles.titleItem}>Itens no seu carrinho</Text>

          <View style={styles.head}>
            <Text style={styles.text}>Remover{"\n"}Item</Text>
            <Text style={styles.text}>Produto</Text>
            <Text style={styles.text}>Preço</Text>
          </View>
          {items.map((item, index) => (
            <View key={index} style={styles.cardItem}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => removeCart(item)}
              >
                <Ionicons
                  name="ios-remove"
                  size={24}
                  color={colors.heading}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Text style={styles.textItem}>{item.title}</Text>
              <Text style={styles.textItem}>{item.price}</Text>
            </View>
          ))}
          <Text style={styles.total}>
            Total: R${" "}
            {delivery
              ? Number(total.toFixed(2)) + 10
              : Number(total.toFixed(2))}
          </Text>
        </>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  infoTitle: {
    fontFamily: fonts.text,
    fontSize: 25,
  },
  titleItem: {
    fontFamily: fonts.heading,
    fontSize: 25,
    marginTop: 20,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.9,
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 17,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.9,
    backgroundColor: colors.gray,
    borderRadius: 10,
    marginVertical: 2,
  },
  icon: {
    padding: 10,
    backgroundColor: colors.red,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textItem: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.heading,
    padding: 10,
  },
  total: {
    margin: 10,
    fontFamily: fonts.text,
    fontSize: 20,
  },
});
