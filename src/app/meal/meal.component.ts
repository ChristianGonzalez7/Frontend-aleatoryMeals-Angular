import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  importMeal: any;
  mealName: string;
  ingredients: any[];
  method: any[];
  image: string;
  prep: string;
  cook: string;
  difficulty: string;
  servings: string;
  description: string;


  constructor(private serviceService: ServiceService) { }


  async ngOnInit() {
    this.importMeal = await this.serviceService.exportActualMeal();
    console.log(this.importMeal);
    this.mealName = this.importMeal.name;
    this.ingredients = this.importMeal.ingredients;
    this.method = this.importMeal.method;
    this.image = this.importMeal.image;
    this.prep = this.importMeal.prep;
    this.cook = this.importMeal.cook;
    this.difficulty = this.importMeal.difficulty;
    this.servings = this.importMeal.servings;
    this.description = this.importMeal.description;
  }


}