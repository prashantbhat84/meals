import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../actions/meals';
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        meal => meal.id === action.mealID
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealID);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedfilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.glutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.lactoseFree) {
          return false;
        }
        if (appliedFilters.vegeterian && !meal.vegeterian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.vegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedfilteredMeals };
    default:
      return state;
  }
};
export default mealsReducer;
