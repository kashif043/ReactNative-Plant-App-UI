import React from "react";
import { View, Text, Image, TextInput, Button, StyleSheet } from "react-native";
import AppStyles from "../../../config/constants";
import { Ionicons } from "@expo/vector-icons";

const HeaderAndLogo = (props) => {
  return (
    <View style={styles.headerWithTitle}>
      <View style={styles.titleAndLogo}>
        <Text style={styles.title}>{AppStyles.appStrings.HI_STORE}</Text>
        <Image style={styles.logo} source={AppStyles.images.logo} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Search"
          placeholderTextColor={AppStyles.color.KPrimaryColor}
        />
        <Ionicons
          name="search"
          size={30}
          style={styles.search}
          color={AppStyles.color.KPrimaryColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWithTitle: {
    height: 155,
    backgroundColor: AppStyles.color.KPrimaryColor,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    shadowColor: AppStyles.color.KPrimaryColor,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.28,
    shadowRadius: 16.0,
    elevation: 24,
  },
  titleAndLogo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: AppStyles.padding.kDefaultPadding,
    marginTop: AppStyles.padding.kDefaultPadding - 5,
  },
  title: {
    fontSize: 25,
    color: AppStyles.color.KBackgroundColor,
    fontWeight: "bold",
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    backgroundColor: AppStyles.color.KBackgroundColor,
    marginHorizontal: AppStyles.padding.kDefaultPadding,
    borderRadius: 22,
    marginTop: AppStyles.padding.kDefaultPadding - 19,
  },
  inputField: {
    height: 45,
    paddingStart: AppStyles.padding.kDefaultPadding,
    opacity: 0.5,
    fontSize: 16,
  },
  search: {
    paddingEnd: AppStyles.padding.kDefaultPadding,
    opacity: 0.5,
  },
});
export default HeaderAndLogo;
