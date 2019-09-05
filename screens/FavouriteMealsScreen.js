import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
const FavouriteMealsScreen = props => {
  const availableMeals = useSelector(state => state.meals.favouriteMeals);
  //const favMeals = availableMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  if (availableMeals.length === 0 || !availableMeals) {
    return (
      <View style={StyleSheet.content}>
        <DefaultText>No Favourite Meals Found</DefaultText>
      </View>
    );
  } else {
    return <MealList listData={availableMeals} navigation={props.navigation} />;
  }
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
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouriteMealsScreen;
