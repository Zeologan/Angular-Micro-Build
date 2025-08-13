import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  islogin = false;
  loginBtn = "Sign In";
  list = [
    "Declarative sentences state facts or opinions",
    "Exclamatory sentences express strong feelings or emotions",
    "Imperative sentences give commands or directions",
    "Interrogative sentences ask questions.",
    "Informational sentences provide information about things."
  ]

  isAuth(){
    this.loginBtn =  this.islogin === true ? "Sign Out" : "Sign In";
    this.islogin = !this.islogin;
    console.log(this.islogin);
  }
}
