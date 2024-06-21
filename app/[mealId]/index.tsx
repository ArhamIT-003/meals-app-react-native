import { FlatList, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { MEALS } from "@/extra/dummy-data";
import MealItem from "@/components/Meal-Item";

interface renderMealItem {
  item: {
    id: string;
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
  };
}

export default function SingleMealsOverview() {
  const { mealId } = useLocalSearchParams();

  // console.log("meal id", mealId);
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(mealId) >= 0;
  });

  function renderMealItem({ item }: renderMealItem) {
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUri={item.imageUrl}
        duration={item.duration}
        affordability={item.affordability}
        complexity={item.complexity}
      />
    );
  }
  return (
    <View style={{ marginTop: 50, marginHorizontal: 20 }}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
