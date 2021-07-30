import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";


import images from "../services/images";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const ListGames = ({ title, price }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Info", {title, price})}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={images[title]}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.price}>R$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListGames;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    marginVertical: 20,
    paddingHorizontal: 10,
    width: Dimensions.get("window").width * 0.45,
    backgroundColor: colors.shape,
    marginHorizontal: 8,
  },
  image: {
    height: Dimensions.get("window").height * 0.2,
    alignSelf: "center",
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 18,
    color: colors.heading,
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    marginHorizontal: 7,
  },
  price: {
    fontFamily: fonts.text,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
});
