import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the category Meals screen</Text>
      <Button
        title='Meal Details'
        onPress={() => {
          props.navigation.navigate('MealDetails');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
export default CategoryMealsScreen;
