import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  actualMeal: Meal;
  ingredients: any[];
  method: any[];
  

  constructor(private serviceService: ServiceService) {
    this.actualMeal = new Meal(0, '', '', '', '', '', '', '', '', '', 0);
    this.ingredients = new Array;
    this.method = new Array;
   }


  async ngOnInit() {
    this.actualMeal = this.serviceService.returnActualMeal();
    this.ingredients = this.actualMeal.ingredients.split(', ');
    this.method = this.actualMeal.method.split('.');
  }


}