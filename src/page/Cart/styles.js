import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  infoTitle: {
    fontFamily: fonts.text,
    fontSize: 25,
    position: "absolute",
    top: "50%",
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
    fontWeight: "bold",
  },
  total: {
    margin: 10,
    fontFamily: fonts.text,
    fontSize: 20,
  },
});

export default styles;
