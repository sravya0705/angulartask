import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
items = ['All', 'Fast Food', 'American Food', 'Pizza', 'Asian', 'Dessert', 'Mexican', 'Breakfast']
  constructor() { }

  ngOnInit(): void {
  }

}
