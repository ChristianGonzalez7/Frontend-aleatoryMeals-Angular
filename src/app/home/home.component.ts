import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayMeal: string;
  actualMeal: Meal;
  food: string;

  ingredients: any[];
  method: any[];

  infoImported: any;


  constructor(private serviceService: ServiceService) {
    this.displayMeal = 'none';
    this.food = '';
    this.ingredients = new Array;
    this.method = new Array;

    this.actualMeal = new Meal(0, '', '', '', '', '', '', '', '', '', 0);

    this.infoImported = {};
  }

  ngOnInit(): void {
  }

  async bringMealData($event){
    this.infoImported = await this.serviceService.bringMealbyFoodId($event.target.id);

    console.log(this.infoImported);

    this.actualMeal = new Meal(this.infoImported.MEAL_ID, this.infoImported.MEAL_NAME, this.infoImported.MEAL_INGREDIENTS, this.infoImported.MEAL.METHOD, this.infoImported.MEAL.IMAGE, this.infoImported.MEAL.URL, this.infoImported.MEAL.PREP, this.infoImported.MEAL.DIFFICULTY, this.infoImported.MEAL.SERVING, this.infoImported.MEAL.DESCRIPTION, this.infoImported.FOOD_ID);

    if (this.actualMeal.foodId === 1) {
      this.food = 'banana';
    } else if (this.actualMeal.foodId === 2) {
      this.food = 'apple';
    } else if (this.actualMeal.foodId === 3) {
      this.food = 'chicken';
    }

    this.ingredients = this.actualMeal.ingredients.split(',');
    this.method = this.actualMeal.ingredients.split('.');

    // Display hidden DIV container with meal
    this.displayMeal = 'inline-block';
  }
 
  mealData() {}

}
