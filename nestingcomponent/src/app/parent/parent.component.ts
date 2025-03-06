import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendData() {
    this.messageEvent.emit('Hello Parent!');
}
