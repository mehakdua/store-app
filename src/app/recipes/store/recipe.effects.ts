import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as RecipeActions from './recipe.actions';
import { Recipe } from '../recipe.model';



@Injectable()
export class RecipeEffects {
  @Effect()
    getRecipes= this.actions$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap(()=>{
            return  this.http
            .get<Recipe[]>(
              'http://localhost:3000/recipes/'
            ).pipe(
                map(recipes => {
                    return new RecipeActions.SetRecipes(recipes);
                 // this.recipeService.setRecipes(recipes);
                })
            );
        })
    )

    constructor(
      private actions$: Actions,
      private http: HttpClient,
      private router: Router
    ) {}
  
}
