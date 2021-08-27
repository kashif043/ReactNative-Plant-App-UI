import React from "react";
import { View, Text, StyleSheet } from "react-native";
import appStyles from "../../../config/constants";
import { TouchableOpacity } from "react-native-gesture-handler";


const TitleWithButton = (props) => {
  return (
    <View style={styles.titleAndButtonContainer}>
      <View style={styles.titleContainerWithUnderLine}>
        <Text style={styles.recomendedTitle}>{props.title}</Text>
        <View style={styles.underline}></View>
      </View>
      <TouchableOpacity style={styles.moreBtn}>
        <Text style={styles.moreText}>{props.btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleAndButtonContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: appStyles.padding.kDefaultPadding,
  },
  titleContainerWithUnderLine: {
    height: 50,
    justifyContent: "center",
  },
  recomendedTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: appStyles.color.KTextColor,
    paddingStart: 7,
  },
  underline: {
    height: 7,
    backgroundColor: appStyles.color.KPrimaryColor,
    opacity: 0.23,
    marginEnd: 7,
  },
  moreBtn: {
    height: 40,
    width: 70,
    borderRadius: 20,
    backgroundColor: appStyles.color.KPrimaryColor,
    justifyContent: "center",
  },
  moreText: {
    alignSelf: "center",
    color: appStyles.color.KBackgroundColor,
    fontSize: 17,
  },
});
export default TitleWithButton;
