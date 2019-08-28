import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouriteMealsScreen';
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
const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favourites: FavouritesScreen
});
export default createAppContainer(MealsFavTabNavigator);
