import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  allRestaurantsURL = "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants";
  restaurantDetailsURL = "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails";
  menuURL = "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu"; 

  constructor(public http:HttpClient) { }

  getAllRestaurants(){
    return this.http.get(this.allRestaurantsURL);
  }
  getRestaurantDetails() {
    return this.http.get(this.restaurantDetailsURL);
  }
  getMenus() {
    return this.http.get(this.menuURL);
  }
}
