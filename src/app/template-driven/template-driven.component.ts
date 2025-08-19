import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  onSubmit(form:any){
    console.log(`Form Value : ${JSON.stringify(form.value)}`)
  }
}
