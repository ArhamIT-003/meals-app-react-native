import { View, Text } from "react-native";
import { Slot } from "expo-router";

export default function layout() {
  return (
    <View>
      <Slot />
    </View>
  );
}
