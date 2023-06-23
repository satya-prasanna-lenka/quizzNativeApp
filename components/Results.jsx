import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Results = ({ navigate }) => {
  return (
    <View>
      <View>
        <Text style={styles.result}>
          Hoorey you finished the quiz, Your score is :
          <Text style={{ color: "red" }}> 2</Text>
        </Text>
      </View>
      <View>
        <Image
          style={{ height: 500, width: "auto" }}
          source={require("../assets/win.jpg")}
        />
      </View>
      <TouchableOpacity
        style={styles.back_btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  back_btn: {
    height: 50,
    width: 100,
    backgroundColor: "#00b4d8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    left: "35%",
    top: 30,
  },
  result: {
    padding: 15,
    fontSize: 20,
  },
});

export default Results;
