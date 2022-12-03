import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() menuOption: EventEmitter<string> = new EventEmitter();
  folders = [
    {name:'Home', icon:'home'},
    {name:'Orders', icon:'assignment'},
    {name:'Notification', icon:'mail'},
    {name:'Help & Support', icon:'help'},
    {name:'Settings', icon:'settings'},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(value:any){
    this.menuOption.emit(value);
  }
}
