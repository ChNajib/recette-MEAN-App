import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {RecipeApiService} from 'app/services/recipe-api.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe :Object;
  userId : any;
  constructor(private  recApi : RecipeApiService,
    private router: Router,
    private flashMessage: FlashMessagesService/*,
    private authService:AuthService*/  ) { }

  ngOnInit() {
    /*this.authService.getProfile().subscribe(profile => {
    this.userId = profile.user._id;
    },
     err => {
       console.log(err);
       return false;
     });*/
  }
  onCreate(recipe){
    this.recApi.createRecipe(recipe/*,this.userId*/);
    this.flashMessage.show('Recipe Created', {cssClass: 'alert-success', timeout: 5000});
    //this.router.navigate[''];
  }
  /*onDelete(_id : String){
    if (confirm('Are you sure to delete this record ?') == true){
      this.recApi.deleteRecipe(_id);
    }
  }

  onUpdate(recipe){
    this.recApi.updateRecipe(recipe);
  }

  getRecDetail(_id){
    this.recApi.getRecipeDetail(_id);
  }*/
}
