import DetailList from "@/components/Detail-List";
import { MEALS } from "@/extra/dummy-data";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function MealsDetailPage() {
  const { id } = useLocalSearchParams();

  const mealsDetails = MEALS.find((meals) => meals.id === id);

  return (
    <FlatList
      style={styles.mealDetails}
      ListHeaderComponent={
        <View>
          <Image
            source={{ uri: mealsDetails?.imageUrl }}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.detailsText}>{mealsDetails?.duration}min</Text>
            <Text style={styles.detailsText}>
              {mealsDetails?.affordability.toUpperCase()}
            </Text>
            <Text style={styles.detailsText}>
              {mealsDetails?.complexity.toUpperCase()}
            </Text>
          </View>
        </View>
      }
      data={[mealsDetails?.ingredients, mealsDetails?.steps]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <DetailList
          key={index}
          data={item}
          title={index === 0 ? "Ingredients" : "Steps"}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  mealDetails: {
    marginTop: 50,
  },
  image: {
    width: "100%",
    height: 350,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  details: {
    marginTop: 8,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  detailsText: {
    color: "#e2b490",
  },
});
