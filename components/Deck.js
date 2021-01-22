import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Deck(props){

  const { cards, id } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.deckText}>{id}</Text>
      </View>
      <View>
        <Text style={styles.cardText}>{cards.length} cards</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 120,
    minHeight: 120,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#8ecae6',
    borderRadius: 2,
    marginTop:25,
},

  deckText: {
    fontSize: 24
  },
  cardText: {
    fontSize: 18,
    color: 'black'
  }
});

export default Deck;