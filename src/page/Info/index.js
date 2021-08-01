import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { getValue } from "../../context/AddCart";

import images from "../../services/images";

import styles from "./styles";

const Info = () => {
  const route = useRoute();
  const { title, price } = route.params;

  const { addCart } = getValue();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={images[title]} resizeMode="contain" style={styles.image} />
      <Text style={[styles.text, { fontWeight: "bold" }]}>R$ {price}</Text>
      <Text style={[styles.text, { marginBottom: 10 }]}>Frete R$ 10,00</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.containerAdd}
        onPress={() => addCart({ price, title })}
      >
        <Text style={styles.titleAdd}>Adicionar ao carrinho</Text>
        <Ionicons name="ios-add" size={24} color="white" style={styles.add} />
      </TouchableOpacity>
    </View>
  );
};

export default Info;
