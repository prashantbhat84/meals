import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const FavouriteMealsScreen = props => {
  const availableMeals = useSelector(state => state.meals.favouriteMeals);
  //const favMeals = availableMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList listData={availableMeals} navigation={props.navigation} />;
};
FavouriteMealsScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'My Favourites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

export default FavouriteMealsScreen;
