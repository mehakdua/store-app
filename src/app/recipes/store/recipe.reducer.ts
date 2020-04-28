import * as RecipeActions from './recipe.actions';
import { Recipe } from '../recipe.model';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes:[],
};

export function recipeListReducer(
  state: State = initialState,
  action: RecipeActions.RecipeActions
) {
  switch (action.type) {
    case RecipeActions.ADD_RECIPE:
      console.log("action",state,action.payload);
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
      case RecipeActions.UPDATE_RECIPE:
      const myrecipes = [...state.recipes];
      myrecipes[action.index] = action.payload
       return {
        ...state.recipes,
        recipes:[...myrecipes]
      };
      case RecipeActions.DELETE_RECIPE:
        const recipesCopy = [...state.recipes];
        recipesCopy.splice(action.index,1);
        return {
          ...state,
         recipes:[...recipesCopy]
        };
     
      case RecipeActions.SET_RECIPES:
        return {
          ...state,
          recipes:[ ...state.recipes,...action.payload ]
      };
      case RecipeActions.FETCH_RECIPES:
        return {
          ...state
      };
        
  /*  case RecipeActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] }
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };*/
    default:
      return state;
  }
}
