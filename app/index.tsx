import { View, FlatList } from "react-native";
import { CATEGORIES } from "@/extra/dummy-data";
import CategoryGrid from "@/components/Category-Grid";

interface RenderCategoryItemType {
  item: {
    id: string;
    title: string;
    color: string;
  };
}

function RenderCategoryItem({ item }: RenderCategoryItemType) {
  return (
    <CategoryGrid title={item.title} color={item.color} mealId={item.id} />
  );
}

export default function CategoriesScreen() {
  return (
    <View style={{ marginTop: 40 }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={RenderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}
