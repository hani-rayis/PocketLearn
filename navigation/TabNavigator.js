import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { handleInitialData } from '../actions/index';
import Settings from '../components/Settings'
import AddDeck from '../components/AddDeck'
import QuizStackNavigator from './QuizStackNavigator'

const Tab = createBottomTabNavigator();

function TabNavigator(props) {

    useEffect(() => {
        props.dispatch(handleInitialData());
      },[]);

    return (
        <SafeAreaView style={styles.container}>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Deck') {
                        iconName = focused
                          ? 'ios-apps'
                          : 'ios-apps';
                      } else if (route.name === 'Add') {
                        iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                      } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list';
                      }
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'black',
                    activeBackgroundColor: '#023e8a'
                  }}
                >
            <Tab.Screen name="Deck" component={QuizStackNavigator} />
            <Tab.Screen name="Add" component={AddDeck} />
            <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

  const mapStateToProps = decks => ({ decks });

  export default connect(mapStateToProps)(TabNavigator);
