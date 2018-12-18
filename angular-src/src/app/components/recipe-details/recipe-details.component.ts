import { Component, OnInit } from '@angular/core';
import {RecipeApiService} from 'app/services/recipe-api.service';
import {Recipe} from '../../../../../models/recipe.js'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private  recApi : RecipeApiService) { }

  ngOnInit() {
  }

  getRecDetail(_id){
    this.recApi.getRecipeDetail(_id).subscribe((data) => {
      //console.log(data.json());
      this.recApi.selectedRecipe = <any>data.json() as Recipe;
    });
  }
}
