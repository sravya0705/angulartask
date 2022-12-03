import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { MatChipList } from '@angular/material/chips';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  @Input() restaurantName: any;
  restaurantDetails: any;
  menuDetails: any;
  itemCategory:any =[];


  constructor(public service:CommonService) { }

  ngOnInit(){
    this.getRestaurantDetails();
    this.getMenuDetails();
  }
  getRestaurantDetails(){
   this.service.getRestaurantDetails().subscribe((res:any) => {
     this.restaurantDetails = res.restaurantDetails.find((x:any) => x.restaurantName == this.restaurantName);
   })
  }
  getMenuDetails() {
    this.service.getMenus().subscribe((res:any) => {
      res.menu.forEach((element:any) => {
        element.itemCategory = JSON.parse(element.itemCategory.replace(/\\/g, ''));
        element.restaurantName = JSON.parse(element.restaurantName.replace(/\\/g, ''));
      });
      this.menuDetails = res.menu.filter((x:any) => (x.restaurantName.includes(this.restaurantName)) );
    this.menuDetails.forEach((menuItem:any) => {
      menuItem.itemCategory.forEach((element:any) => {
        if(this.itemCategory.length && this.itemCategory.find((x:any) => x.item == element)){
          this.itemCategory.find((x:any) => x.item == element)['count']++;
        }
        else {
          this.itemCategory.push({item:element,count:1});
        }
      });
    });
  })
  }
}
