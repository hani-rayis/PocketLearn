import React from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { removeDeck } from "../actions/index";

function DeckInfo(props) {
  const handleDeleteDeck = (id) => {
    props.dispatch(removeDeck(id));
    //props.navigation.goBack();
    props.navigation.navigate("PocketLearn");
  };

  const { navigation } = props;
  const { cards, title } = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.block}>Total number of cards: {cards.length} </Text>
      <TouchableOpacity
        style={cards.length === 0 ? styles.disabled : styles.btn}
        disabled={cards.length === 0}
        onPress={() =>
          navigation.navigate("Start Quiz", {
            title: title,
            cards: cards,
          })
        }
      >
        <Text style={styles.btnText}>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Add Card", { title: title })}
      >
        <Text style={styles.btnText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleDeleteDeck(title)}
      >
        <Text style={styles.btnText}>Delete Deck</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

  block: {
    margin: 20,
  },

  disabled: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#8ecae6",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontSize: 18,
    color: "#000",
  },

  title: {
    fontSize: 32,
    alignItems: "center",
    margin: 20,
  },
});

export default connect()(DeckInfo);
