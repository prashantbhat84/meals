import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = props => {
  const catID = props.navigation.getParam('categoryID');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

  return (
    <View style={styles.screen}>
      <Text>This is the category Meals screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Meal Details'
        onPress={() => {
          props.navigation.navigate('MealDetails');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryID');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
export default CategoryMealsScreen;
