import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import DefaultText from '../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { toggleFavourite } from '../store/actions/meals';

const MealDetailsScreen = props => {
  const id = props.navigation.getParam('mealID');
  const availableMeals = useSelector(state => state.meals.meals);
  const currentMealIsFavourite = useSelector(state =>
    state.meals.favouriteMeals.some(meal => meal.id === id)
  );
  const selectedMeal = availableMeals.find(meal => meal.id === id);
  const ListItems = props => {
    return (
      <View style={styles.listItems}>
        <DefaultText>{props.children}</DefaultText>
      </View>
    );
  };
  const dispatch = useDispatch();
  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(id));
  }, [dispatch, id]);
  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);
  useEffect(() => {
    props.navigation.setParams({ IsFavourite: currentMealIsFavourite });
  }, [currentMealIsFavourite]);

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
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavourite = navigationData.navigation.getParam('toggleFav');
  //const selectedMeal = MEALS.find(meal => meal.id === id);
  const isFav = navigationData.navigation.getParam('isFavourite');
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favourite'
          iconName={isFav ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavourite}
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
