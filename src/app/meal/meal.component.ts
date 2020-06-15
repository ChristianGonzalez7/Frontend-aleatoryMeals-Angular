import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }



}

// TODO: agregar evento on click a img con id banana para que traiga los datos del array en servicios