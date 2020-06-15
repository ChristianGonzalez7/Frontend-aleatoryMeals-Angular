import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodObject: any;
  randomMeal: any;
  food: string;
  mealName: string;
  ingredients: any[];
  method: any[];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
  }

  async bringMealData($event){
    this.foodObject = await this.serviceService.bringMealbyFood($event.target.id);
    console.log(this.foodObject);
    // this.randomMeal = this.foodObject.
  }



}
