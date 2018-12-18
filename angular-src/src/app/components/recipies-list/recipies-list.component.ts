import { Component, OnInit } from '@angular/core';
import {RecipeApiService} from 'app/services/recipe-api.service';
import {Recipe} from '../../../../../models/recipe.js'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  allRecepies : any;  
  userId:any;

  constructor(private recApi : RecipeApiService,public router: Router,private authService:AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      console.log(profile.user._id);
      this.userId = profile.user._id;
    },
     err => {
       console.log(err);
       return false;
     });
    this.showRecipies();
  }
  showRecipies(){
    this.recApi.getAllRecipies().subscribe((data) => {
      //console.log(data.json());
      this.recApi.recepies = <any>data.json() as Recipe[];
    });
}
}
