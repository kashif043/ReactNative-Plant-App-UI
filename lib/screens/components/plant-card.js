import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import AppStyles from "../../../config/constants";

const PlantCard = (props) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={props.image}
      />
      <View style={styles.nameAndCountryContainer}>
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.country}>{props.country}</Text>
        </View>
        <Text style={styles.price}>{`$` + props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: Platform.OS === 'ios' ? 235 : 245,
    width: 160,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: AppStyles.color.KPrimaryColor,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.23,
    shadowRadius: 25.0,
    elevation: 24,
    marginEnd: 20,
    marginTop: 15,
  },
  image: {
    width: 160,
    height: 180,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  nameAndCountryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  name: {
    color: AppStyles.color.KTextColor,
    fontSize: 16,
  },
  country: {
    color: AppStyles.color.KPrimaryColor,
    fontSize: 15,
    opacity: 0.5,
  },
  price: {
    color: AppStyles.color.KPrimaryColor,
    fontSize: 15,
    marginTop: 10,
  }
});
export default PlantCard;
