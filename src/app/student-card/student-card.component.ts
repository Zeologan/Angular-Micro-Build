import { Component } from '@angular/core';

export interface Students {
  id: number;
  name: string;
  age: number;
  phone: number;
  city: string;
}

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

  isVisible = false;
  btn = 'Show';
  hideSHowEffect(){
    this.isVisible = !this.isVisible;
    this.btn = this.btn === "Show"? "Hide":"Show";
    console.log('working')
  }

  student: Students[] = [
    {
      id: 1,
      name: "rohit",
      age: 23,
      phone: 200945892,
      city: "Mumbai"
    },
    {
      id: 2,
      name: "mithesh",
      age: 24,
      phone: 879824535,
      city: "Thane"
    },
    {
      id: 3,
      name: "shubham",
      age: 24,
      phone: 123456788,
      city: "kalyan"
    }
  ]
}
