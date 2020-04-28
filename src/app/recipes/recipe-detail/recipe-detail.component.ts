import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../../recipes/store/recipe.actions';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,public store:Store<fromApp.AppState>) {
  }

  ngOnInit() {

    this.route.params.pipe( map(params=>{
      return params['id']
    }),switchMap(id=>{
      this.id=id;
      return this.store.select('recipeList')
    }),map(stateData=>{
      return stateData.recipes.find((recipe,index)=>{
        return index == this.id;
      })
    })    
    ).subscribe(data=>{
      console.log(data);
      this.recipe = data;
    })
    /*letters.pipe(
      mergeMap(x => interval(1000).pipe(map(i => x+i))),
    );*/
    //this.route.params.pipe(switchMap(params=> this.store.select('recipeList').pipe(map(stateData=>stateData.recipes.))
   /* this.route.params.pipe(map(params=>{
      return params['id']
    }),switchMap(id=>{
      this.id=id;
     return  this.store.select('recipeList')
    }),map(stateData =>{
      return stateData.recipes.find((recipe,index)=>{
        return index == this.id;
      })
    }) 
    ).subscribe(recipe=>{
      this.recipe =recipe;
    })*/
    //this.route.params
      //.subscribe(
        //(params: Params) => {
          //this.id = +params['id'];
          /*this.store.select('recipeList').pipe(map(recipeState=>{
            return recipeState.recipes.find((recipe,index)=>{
              return index === this.id;
            })
          })).subscribe((data)=>{
            this.recipe =data;
          })*/
           /*this.store.dispatch(new RecipeActions.GetRecipe(this.id)).pipe(map(recipeState=>{
             return recipeState.selectedRecipe
           }))
           .subscribe(stateData=>{
            this.recipe = stateData.selectedRecipe;
          })*/
         // this.recipe = this.recipeService.getRecipe(this.id);
       // }
      //);
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id))
    //this.recipeService. (this.id);
    this.router.navigate(['/recipes']);
  }

}
