import { Component, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childMessage: string = ''; 
  @Input() data!: string;

ngOnChanges() {
  console.log('Received from parent:', this.data);
}

}
