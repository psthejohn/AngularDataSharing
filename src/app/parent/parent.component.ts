import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  // Data from Parent to child
  firstName: string;
  lastName: string;
  siblings: any;
  // Data From child to parent
  valueFromChild2: string = '';
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.siblings = [];
  }


  parentEvntHndlr(valueEmitted: any) {
    this.valueFromChild2 = valueEmitted;
  }
  ngOnInit() {
    this.firstName = "Pushpinder";
    this.lastName = "Singh";
    this.siblings = new Array<string>('first child', 'second child', 'third child');
  }
}
