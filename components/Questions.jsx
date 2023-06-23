import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const Questions = ({ navigation }) => {
  const [data, setData] = useState();
  const [num, setNum] = useState(0);
  const [option, setOption] = useState();
  const [correct, setCorrect] = useState();
  const [success, setSuccess] = useState("");
  const apiCall = async () => {
    const api =
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

    const res = await fetch(api);
    const data = await res.json();
    setData(data.results);
    const ss = data.results[0].incorrect_answers;
    ss.push(data.results[0].correct_answer);
    shuffleArray(ss);
    setOption(ss);
    setCorrect(data.results[0].correct_answer);
  };

  const handleNext = () => {
    setNum(num + 1);
    const ss = data[num + 1].incorrect_answers;
    ss.push(data[num + 1].correct_answer);
    shuffleArray(ss);
    setOption(ss);
    setCorrect(data[num + 1].correct_answer);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      return setOption(array);
    }
  }

  console.log(correct);

  const handlePress = (ans) => {
    if (ans === correct) {
      console.log("corrct");
      setSuccess("#57cc99");
    } else {
      console.log("incorrect");
      setSuccess("red");
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <View style={styles.main_container}>
      <View>
        <Text style={{ fontSize: 25, marginBottom: 25 }}>
          {num + 1} {data && data[num].question}
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity
          // style={{ backgroundColor: `${success} ? "#80ed99":"red"` }}
          onPress={() => handlePress(option && option[0])}
          style={{ backgroundColor: `${success}` }}
        >
          <Text style={styles.choosed_option}>a. {option && option[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: `${success}` }}
          onPress={() => handlePress(option && option[1])}
        >
          <Text style={styles.choosed_option}>b. {option && option[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(option && option[2])}>
          <Text style={styles.choosed_option}>c. {option && option[2]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(option && option[3])}>
          <Text style={styles.choosed_option}>d. {option && option[3]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.skip_btn}>
        <TouchableOpacity style={styles.skip_btnt}>
          <Text style={{ fontSize: 20 }}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skip_btnt} onPress={handleNext}>
          <Text style={{ fontSize: 20 }}>NEXT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.skip_btnt}
          onPress={() => navigation.navigate("Results")}
        >
          <Text style={{ fontSize: 20 }}>RESULT</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    // left: 20,
    margin: 30,
  },
  skip_btn: {
    marginBottom: 60,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  skip_btnt: {
    height: 50,
    width: 100,
    backgroundColor: "#00b4d8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  options: {
    position: "relative",
    bottom: "20%",
  },
  choosed_option: {
    fontSize: 20,
    backgroundColor: "#caf0f8",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default Questions;
