import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface ISection {
  title: string;
}

const Section: React.FC<ISection> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.seeAll}>Ver tudo</Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "#F2264B",
  },
  seeAll: {
    fontFamily: "gilroy-medium",
    fontSize: 14,
    color: "#B7B7C8",
  },
});
