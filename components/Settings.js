import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { resetData } from "../actions/index";

function Settings(props) {
  const handleResetDecks = () => {
    props.dispatch(resetData());
    props.navigation.navigate("PocketLearn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View>
        <Text style={styles.body}>
          Removes all created decks and resets the app.
        </Text>
      </View>
      <TouchableOpacity onPress={handleResetDecks} style={styles.btn}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },

  body: {
    fontSize: 15,
    alignContent: "center",
  },

  title: {
    fontSize: 32,
  },

  btn: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default connect()(Settings);
