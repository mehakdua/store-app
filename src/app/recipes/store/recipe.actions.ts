import { Action } from '@ngrx/store';

import { Recipe } from '../recipe.model';

export const ADD_RECIPE = '[Recipes] Add Recipe';
export const GET_RECIPE = '[Recipes] Get Recipe';
export const UPDATE_RECIPE = '[Recipes] Update Recipe';
export const DELETE_RECIPE = '[Recipes] Delete Recipe';
export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
/*export const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
export const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
export const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
export const START_EDIT = '[Shopping List] Start Edit';
export const STOP_EDIT = '[Shopping List] Stop Edit';*/

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;

  constructor(public payload: Recipe) {}
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;

  constructor(public payload: Recipe,public index:number ) {}
}
export class GetRecipe implements Action {
  readonly type = GET_RECIPE;

  constructor(public index:number ) {}
}
export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;

  constructor(public index:number ) {}
}
export class SetRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}
export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;

  constructor() {}
}


export type RecipeActions =
  SetRecipes
  | AddRecipe
  | UpdateRecipe
  |DeleteRecipe
  |GetRecipe|
  FetchRecipes
  /*| UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit*/;
