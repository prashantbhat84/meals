import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import React from 'react';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouriteMealsScreen';
import { Ionicons } from '@expo/vector-icons';
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: { screen: MealDetailsScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white'
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen'
    }
  }
);
const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarLabel: 'Food Choice',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {
        tabBarLabel: 'Fav',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);
export default createAppContainer(MealsFavTabNavigator);
