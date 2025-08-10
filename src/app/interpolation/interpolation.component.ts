import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  welcome = "Welcome Rohit Your Component is Ready"
  list = ["Rohit", "Jiten", "Mithesh","Shubham"];
}
