import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { getValue } from "../../context/AddCart";

import images from "../../services/images";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const Info = () => {
  const route = useRoute();
  const { title, price } = route.params;

  const { addCart } = getValue();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={images[title]} resizeMode="contain" style={styles.image} />
      <Text style={[styles.text, { fontWeight: "bold" }]}>R$ {price}</Text>
      <Text style={[styles.text, { marginBottom: 10}]}>Frete R$ 10,00</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.containerAdd} onPress={() => addCart({price, title})}>
        <Text style={styles.titleAdd}>Adicionar ao carrinho</Text>
        <Ionicons name="ios-add" size={24} color="white" style={styles.add} />
      </TouchableOpacity>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 30,
    marginVertical: 15,
    textAlign: "center",
    width: Dimensions.get("window").width * 0.8,
  },
  containerAdd: {
    flexDirection: "row",
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 5,
  },
  titleAdd: {
    fontFamily: fonts.text,
    fontSize: 20,
    margin: 5,
    color: colors.background,
    borderRightColor: colors.blue_light,
    borderRightWidth: 2,
    paddingRight: 5,
  },
  add: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: colors.red,
    padding: 3,
    borderRadius: 20,
    margin: 5,
  },
  image: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.5,
    alignSelf: "center",
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 20,
    margin: 5,
  },
});
