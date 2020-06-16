import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  randomMeal: any;
  food: string;
  mealName: string;
  ingredients: any[];
  method: any[];
  nmbr: number;
  displayMeal: string;

  constructor(private serviceService: ServiceService) {
    this.nmbr = 999;
    this.displayMeal = 'none';
  }

  ngOnInit(): void {
  }

  async bringMealData($event){
    const foodObject:any = await this.serviceService.bringMealbyFood($event.target.id);

    // First time random number
    if (this.nmbr === 999) {
      this.nmbr = Math.floor(Math.random() * ((foodObject.meals.length-1) - 0 + 1) + 0);
    }

    // Change meal so it doesn't repeat
    if (this.nmbr === (foodObject.meals.length-1)) {
      this.nmbr--
    } else if (this.nmbr >= 0) {
      this.nmbr++
    }
    // Add meal data
    this.randomMeal = foodObject.meals[this.nmbr];
    this.food = foodObject.food;
    this.mealName = this.randomMeal.name;
    this.ingredients = this.randomMeal.ingredients;
    this.method = this.randomMeal.method;

    // Display DIV container with meal
    this.displayMeal = 'inline-block';
  }

  mealData() {
    return this.randomMeal;
  }



}
