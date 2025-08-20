import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  // Step 1: Create a FormGroup
  contactForm = new FormGroup({
    fullname : new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    connect : new FormControl('')
  })

  // Step 2: Handle submit
  onSumbit(){
    console.log('form value', this.contactForm.value);
    this.contactForm.reset()
  }


}
