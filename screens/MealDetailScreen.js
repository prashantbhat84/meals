import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from 'react-native';
import DefaultText from '../components/DefaultText';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = props => {
  const id = props.navigation.getParam('mealID');
  const selectedMeal = MEALS.find(meal => meal.id === id);
  const ListItems = props => {
    return (
      <View style={styles.listItems}>
        <DefaultText>{props.children}</DefaultText>
      </View>
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordibility}</DefaultText>
      </View>
      <Text style={styles.textTitle}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItems key={ingredient}>{ingredient}</ListItems>
      ))}
      <Text style={styles.textTitle}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItems key={step}>{step}</ListItems>
      ))}
    </ScrollView>
  );
};
MealDetailsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('mealID');
  const selectedMeal = MEALS.find(meal => meal.id === id);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favourite'
          iconName='ios-star'
          onPress={() => {
            console.log(`Mark as Favourite`);
          }}
        />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  textTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItems: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});
export default MealDetailsScreen;
