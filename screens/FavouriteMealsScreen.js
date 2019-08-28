import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
const FavouriteMealsScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList listData={favMeals} navigation={props.navigation} />;
};
FavouriteMealsScreen.navigationOptions = {
  headerTitle: 'My Favourites'
};

export default FavouriteMealsScreen;
