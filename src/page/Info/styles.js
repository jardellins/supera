import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

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
    backgroundColor: colors.green,
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

export default styles;
