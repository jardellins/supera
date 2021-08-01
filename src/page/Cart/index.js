import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { getValue } from "../../context/AddCart";
import colors from "../../styles/colors";

import styles from "./styles";

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
                  size={25}
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
