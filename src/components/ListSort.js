import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

const ListSort = ({ title, active = false, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.container, active && styles.containerActive]}>
        <Text style={[styles.title, active && styles.textActive]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListSort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  containerActive: {
    backgroundColor: colors.blue,
  },
  textActive: {
    color: colors.background,
    fontWeight: "bold",
  },
  title: {
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: "center",
    marginTop: -10,
    color: colors.heading,
  },
});
