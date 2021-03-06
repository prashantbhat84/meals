import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import React from 'react';
import { Text } from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouriteMealsScreen';
import FilterScreen from '../screens/FiltersScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 25
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

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
    defaultNavigationOptions: defaultStackNavOptions
  }
);
const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Food Choice',
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
    }
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favourites',
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: 'green',
      tabBarLabel: (
        <Text style={{ fontFamily: 'open-sans-bold' }}>Favourites</Text>
      )
    }
  }
};
const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true

        //barstyle:{} use when shifting is false
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });
const FilterNav = createStackNavigator(
  {
    Filter: FilterScreen
  },
  {
    navigationOptions: { drawerLabel: 'Filters' },
    defaultNavigationOptions: defaultStackNavOptions
  }
);
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FilterNav
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);
