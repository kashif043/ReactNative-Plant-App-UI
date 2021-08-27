import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import AppStyles from "../../../config/constants";

const FeaturePlantCard = (props) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={props.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: Platform.OS === 'ios' ? 180 : 180,
    width: 290,
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
    width: 290,
    height: 180,
    resizeMode: "cover",
    borderRadius: 15
  },
});
export default FeaturePlantCard;
