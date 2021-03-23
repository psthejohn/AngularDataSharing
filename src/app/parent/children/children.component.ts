import { Component, OnInit } from '@angular/core';
// For accepting value from parent
import { Input } from '@angular/core';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  constructor() {
  }

  //  Values which will be input from parent component.
  @Input() firstName: string = "";
  @Input() lastName: String = "";
  @Input() siblings: [] = [];

  ngOnInit(): void {
  }

}
