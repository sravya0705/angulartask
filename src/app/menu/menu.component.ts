import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any = 'Home';
  restaurantName: any = '';

  constructor() { }

  ngOnInit() {
  }
  getMenuOption(value:any){
   this.menu = value;
  }
  getRestaurantName(name:any){
    this.menu = 'Restaurant Details';
    this.restaurantName = name;
  }
}
