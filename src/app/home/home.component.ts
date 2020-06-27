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


  constructor(private serviceService: ServiceService) {
    this.displayMeal = 'none';
    this.food = '';
    this.ingredients = new Array;
    this.method = new Array;

    this.actualMeal = new Meal(0, '', '', '', '', '', '', '', '', '', 0);
  }

  ngOnInit(): void {
  }

  async bringMealData($event){
    const importInfo: any = await this.serviceService.bringMealbyFoodId($event.target.id);

    this.actualMeal = new Meal(importInfo.MEAL_ID, importInfo.MEAL_NAME, importInfo.MEAL_INGREDIENTS, importInfo.MEAL.METHOD, importInfo.MEAL.IMAGE, importInfo.MEAL.URL, importInfo.MEAL.PREP, importInfo.MEAL.DIFFICULTY, importInfo.MEAL.SERVING, importInfo.MEAL.DESCRIPTION, importInfo.FOOD_ID);

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
