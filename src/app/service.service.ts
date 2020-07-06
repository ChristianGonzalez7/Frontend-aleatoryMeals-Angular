import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from './models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlHome: string;
  urlMealDetail: string;
  meal: any;
  actualMeal: Meal;


  constructor(private http: HttpClient) {
    this.urlHome = 'https://aleatory-meals-node-mysql.herokuapp.com/home/';
    this.urlMealDetail = 'https://aleatory-meals-node-mysql.herokuapp.com/meal/';
    this.meal = new Array;
    this.actualMeal = new Meal(0, '', '', '', '', '', '', '', '', '', 0);
  }

   bringMealbyFoodId(foodId: Number): Promise<any> {
     const prom = new Promise((resolve, reject)=>{
       this.http.get(this.urlHome + foodId).subscribe(meal => {
         this.meal = meal;

         this.actualMeal = new Meal(this.meal.MEAL_ID, this.meal.MEAL_NAME, this.meal.MEAL_INGREDIENTS, this.meal.MEAL_METHOD, this.meal.MEAL_IMAGE, this.meal.MEAL_URL, this.meal.MEAL_PREP, this.meal.MEAL_DIFFICULTY, this.meal.MEAL_SERVING, this.meal.MEAL_DESCRIPTION, this.meal.FOOD_ID);

         resolve(this.meal);
        });
     });
     return prom;
   }

   returnActualMeal(): any {
     return this.actualMeal;
   }

}
