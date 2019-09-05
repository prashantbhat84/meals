import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const catID = props.navigation.getParam('categoryID');
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catID) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryID');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
