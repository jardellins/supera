import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.blue,
    height: Dimensions.get('window').height * 0.25
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0,
  },
  added: {
    backgroundColor: colors.red,
    width: Dimensions.get('window').width * 0.040,
    height: Dimensions.get('window').height * 0.020,
    borderRadius: Dimensions.get('window').width * 0.040 / 2,
    position: 'absolute',
    zIndex: 3,
    marginLeft: 25,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 27,
    textAlign: "center",
    color: colors.shape,
  },
  imageIcon: {
    width: Dimensions.get("window").width * 0.12,
    transform: [{ rotate: "-30deg" }],
  },
  line: {
    borderBottomColor: "#888",
    borderWidth: 0.5,
  },
  order: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  orderTitle: {
      fontFamily: fonts.heading,
      fontSize: 17,
      marginHorizontal: 10,
  },
});

export default styles;
