import { useRouter } from "expo-router";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

interface CategoryGridPropsType {
  title: string;
  color: string;
  mealId: string;
}

export default function CategoryGrid({
  title,
  color,
  mealId,
}: CategoryGridPropsType) {
  const router = useRouter();

  function handlePress(mealId: string) {
    router.push(`/${mealId}`);
  }

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => handlePress(mealId)}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
