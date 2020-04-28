import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import * as RecipeActions from '../recipes/store/recipe.actions';
import * as fromApp from '../store/app.reducer';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,private store: Store<fromApp.AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
   /* return this.http
      .get<Recipe[]>(
        'http://localhost:3000/recipes/'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            console.log(recipe);
            return {
              ...recipe
            };
          });
        }),
        tap(recipes => {
          this.store.dispatch(new RecipeActions.SetRecipes(recipes));
          console.log("tap",recipes);
        })
      );*/
  }
}
