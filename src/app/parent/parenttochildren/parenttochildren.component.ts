import { Component, OnInit } from '@angular/core';

// Necessary For sending data from children to parent
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-children2',
  templateUrl: './parenttochildren.component.html',
  styleUrls: ['./parenttochildren.component.scss']
})
export class ParenttochildrenComponent implements OnInit {

  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }
  public name: string = "";

  ngOnInit(): void {
  }

  clickButton() {
    this.buttonClicked.emit("Children Can Talk to PARENTS");
  }

}

// Note: The EventEmitter is used with the @output directive to emit custom events synchronously or 
// asynchronously, and register handlers for those events by subscribing to an instance.
