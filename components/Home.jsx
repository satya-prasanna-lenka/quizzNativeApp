import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
// import { TouchableOpacity } from "react-native-web";

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.wlc}>Welcome</Text>
      <Image style={styles.image} source={require("../assets/spl.png")} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Questions")}
      >
        <Text style={{ fontSize: 30 }}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wlc: {
    marginVertical: 20,
    fontSize: 50,
    color: "#00b4d8",
  },
  image: {
    position: "relative",
    height: 400,
    width: "100%",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: 30,
    backgroundColor: "#00b4d8",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    borderRadius: 5,
  },
});

export default Home;
