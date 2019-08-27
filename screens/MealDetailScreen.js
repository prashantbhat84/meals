import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
const MealDetailsScreen = props => {
  const id = props.navigation.getParam('mealID');
  const selectedMeal = MEALS.find(meal => meal.id === id);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='Home'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};
MealDetailsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('mealID');
  const selectedMeal = MEALS.find(meal => meal.id === id);
  return {
    headerTitle: selectedMeal.title
  };
};
const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
export default MealDetailsScreen;
