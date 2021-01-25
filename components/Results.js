import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
//import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

function Result(props) {
  // * for allowing notifications on mobile
  //useEffect(){
  //clearLocalNotification().then(setLocalNotification);
  //}

  const { cards, score, title } = props.route.params;
  const correctPercent = ((score / cards.length) * 100).toFixed(1);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Thanks for playing</Text>
        <Text style={styles.block}>
          Correct answers: {score} out of {cards.length}
        </Text>
        <Text style={styles.block}>Score percentage: {correctPercent}%</Text>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          onPress={(e) =>
            props.navigation.push("Start Quiz", { cards, score, title })
          }
          style={styles.btn}
        >
          <Text style={styles.btnText2}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => props.navigation.push("Deck Info", { cards, title })}
          style={styles.btn}
        >
          <Text style={styles.btnText2}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  block: {
    margin: 20,
    fontsize: 20,
  },

  title: {
    fontSize: 32,
    alignItems: "center",
    margin: 20,
  },

  buttonSection: {
    flexDirection: "row",
    // justifyContent:'space-between'
  },

  btn: {
    margin: 10,
    width: 130,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontSize: 18,
    color: "#000",
  },
  btnText2: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Result;
