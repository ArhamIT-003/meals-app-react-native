import { useRouter } from "expo-router";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface MealItemProps {
  id: string;
  title: string;
  imageUri: string;
  duration: number;
  complexity: string;
  affordability: string;
}
export default function MealItem({
  id,
  title,
  imageUri,
  duration,
  complexity,
  affordability,
}: MealItemProps) {
  const router = useRouter();

  function pressHandler(id: string) {
    router.push(`/meals-details/${id}`);
  }

  return (
    <ScrollView style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={() => pressHandler(id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text>{duration}min</Text>
            <Text>{affordability.toUpperCase()}</Text>
            <Text>{complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
