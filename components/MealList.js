import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';
const MealList = props => {
  const favMeal = useSelector(state => state.meals.favouriteMeals);
  const renderMealItem = itemData => {
    const IsFavourite = favMeal.some(meal => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealID: itemData.item.id,
              mealTitle: itemData.item.title,
              IsFavourite: IsFavourite
            }
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.steps}
        image={itemData.item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
export default MealList;
