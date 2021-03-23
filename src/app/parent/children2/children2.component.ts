import { Component, OnInit } from '@angular/core';

// Necessary For sending data from children to parent
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.scss']
})
export class Children2Component implements OnInit {

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
