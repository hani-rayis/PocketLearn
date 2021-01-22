import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Deck from "./Deck";
import { handleInitialData } from "../actions/index";
import { connect } from "react-redux";

function DeckList(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const { decks, navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.values(decks).map((deck) => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
                navigation.navigate("Deck Info", {
                  title: deck.title,
                  cards: deck.cards,
                })
              }
            >
              <Deck id={deck.title} cards={deck.cards} />
              
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (decks) => ({ decks });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f4f5",
  },
});

export default connect(mapStateToProps)(DeckList);
