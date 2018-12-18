import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { AuthService } from '../services/auth.service';
import {Recipe} from '../../../../models/recipe.js'


@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
//url : 'http://127.0.0.1:8080';
//authServ : AuthService;
//userId : any;
recepies : Recipe[];
selectedRecipe : any;
  constructor( private http: Http) { }
  createRecipe(recipe){
    //console.log(this.authServ.user._id);
    //this.userId = this.authServ.user._id;
    this.http.post('recipies/create/5c154e8f5b3d5006a8208694',recipe).subscribe(res=>{
      console.log(res);
    })    
    
    }

  deleteRecipe(_id){
  
    this.http.delete(`recipies/:${_id}/delete`).subscribe(res=>{
      console.log(res);
    })    
  
    }


  getRecipeDetail(_id){
    return this.http.get(`recipies/:${_id}/detail`);
      
  }
  
  
  getAllRecipies(){
   return this.http.get(`recipies/all`);
  }
  

  updateRecipe(recipe){
    this.http.delete(`recipies/:${recipe._id}/update`,recipe).subscribe(res=>{
      console.log(res);
    })

  }
  
  /*getUsersRecipies(_id){
    this.http.get(`recipies/:${_id}`).subscribe(res=>{
      console.log(res);
    })  

  }*/

}
