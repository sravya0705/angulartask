import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurantDetails: any;
  @Output()restaurantName: EventEmitter<any> = new EventEmitter();

  constructor(public service: CommonService) { }

  ngOnInit() {
    this.getRestaurantDetails();
  }
  getRestaurantDetails(){
   this.service.getAllRestaurants().subscribe(res => {
    this.restaurantDetails = res;
   })
  }
  onOpen(name:any){
   this.restaurantName.emit(name);
  }
}
