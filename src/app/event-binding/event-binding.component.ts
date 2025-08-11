import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  text = "event-binding works!";
  changeText(){
    console.log("it working") ;
    this.text = "Event Working Successfully";
  }
}
