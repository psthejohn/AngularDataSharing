import { Component, OnInit } from '@angular/core';
// For accepting value from parent
import { Input } from '@angular/core';


@Component({
  selector: 'app-children',
  templateUrl: './childrentoparent.component.html',
  styleUrls: ['./childrentoparent.component.scss']
})
export class ChildrentoparentComponent implements OnInit {

  constructor() {
  }

  //  Values which will be input from parent component.
  @Input() firstName: string = "";
  @Input() lastName: String = "";
  @Input() siblings: [] = [];

  ngOnInit(): void {
  }

}
