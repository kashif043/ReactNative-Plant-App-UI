import { StyleSheet, Platform } from "react-native";
import appStyles from "../../../config/constants";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  appBar: {
    height: 100,
    backgroundColor: appStyles.color.KPrimaryColor,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingStart: appStyles.padding.kDefaultPadding / 2,
  },
  recomendedPlantsParent: {
    height: Platform.OS === 'ios' ? 300 : 310,
    flexDirection: "row",
  },
  recomendedPlants: {
    height: 290,
    flexDirection: "row",
    paddingHorizontal: appStyles.padding.kDefaultPadding,
  },
  featuredPlantsParent: {
    height: Platform.OS === 'ios' ? 250 : 250,
    flexDirection: "row",
  },
  featuredPlants: {
    height: 240,
    flexDirection: "row",
    paddingHorizontal: appStyles.padding.kDefaultPadding,
  },
});

export default style;
