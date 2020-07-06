import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlHome: string;
  urlMealDetail: string;
  meal: any;

  constructor(private http: HttpClient) {
    this.urlHome = 'https://aleatory-meals-node-mysql.herokuapp.com/home/';
    this.urlMealDetail = 'https://aleatory-meals-node-mysql.herokuapp.com/meal/';
    this.meal = new Array;
  }

   bringMealbyFoodId(foodId: Number): Promise<any> {
     const prom = new Promise((resolve, reject)=>{
       this.http.get(this.urlHome + foodId).subscribe(meal => {
         this.meal = meal;
         resolve(this.meal);
        });
     });
     return prom;
   }

}
