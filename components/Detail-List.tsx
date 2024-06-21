import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface DetailListProps {
  data: string[];
  title: string;
}
export default function DetailList({ data, title }: DetailListProps) {
  const renderMealStep: (props: { item: string }) => JSX.Element = ({
    item,
  }) => (
    <View style={styles.detailItemContainer}>
      <Text style={styles.detailText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderMealStep}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 8,
  },
  subtitleContainer: {
    borderBottomColor: "#e2b490",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 0,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 8,
    color: "#e2b497",
    textAlign: "center",
  },
  detailItemContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  detailText: {
    textAlign: "center",
    backgroundColor: "#e2b490",
    padding: 8,
    borderRadius: 8,
    color: "#24180f",
  },
});
