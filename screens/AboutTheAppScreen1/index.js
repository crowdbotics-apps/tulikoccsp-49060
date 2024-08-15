import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

const AboutTheAppScreen1 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "blue",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.CqzTpmaT}>{"Hello World!"}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#ffffff"
  },
  CqzTpmaT: {
    fontFamily: "Roboto",
    textAlign: "center",
    position: "absolute",
    left: 10,
    width: 10,
    height: 10,
    top: 10,
    opacity: 0.52
  }
});
export default AboutTheAppScreen1;