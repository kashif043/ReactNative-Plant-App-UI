import React from "react";
import { View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import AppStyles from "../../../config/constants";
import BlankSpacer from "react-native-blank-spacer";
import style from "./style";
import PlantCard from "../components/plant-card";
import HeaderAndLogo from "../components/header_with_logo";
import TitleWithButton from "../components/title_with_btn";
import FeaturePlantCard from "../components/feature_plant_card";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appBar}>
          <TouchableOpacity>
            <Ionicons name="ios-menu" size={32} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            {/* this is the header section with search box */}
            <HeaderAndLogo />

            <BlankSpacer height={70} />

            {/* this is the title with more btn custom functional component */}
            <TitleWithButton title={"Recomended"} btnTitle={"More"} />

            <BlankSpacer height={20} />

            {/* this is the plants card custom component View */}
            <View style={style.recomendedPlantsParent}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={style.recomendedPlants}>
                  <PlantCard
                    image={AppStyles.images.image_3}
                    name={"AGERATUM"}
                    country={"RUSSIA"}
                    price={440}
                  />

                  <PlantCard
                    image={AppStyles.images.image_2}
                    name={"CALADIUM"}
                    country={"FRANCE"}
                    price={450}
                  />

                  <PlantCard
                    image={AppStyles.images.image_1}
                    name={"AGERATUM"}
                    country={"RUSSIA"}
                    price={440}
                  />
                </View>
              </ScrollView>
            </View>

            {/* this is the featured title with more Button */}
            <TitleWithButton title={"Featured Plants"} btnTitle={"More"} />

            {/* this is the featured card plants list */}
            <View style={style.featuredPlantsParent}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={style.featuredPlants}>
                  <FeaturePlantCard image={AppStyles.images.feature_1} />
                  <FeaturePlantCard image={AppStyles.images.feature_2} />
                  <FeaturePlantCard image={AppStyles.images.feature_3} />
                </View>
              </ScrollView>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
