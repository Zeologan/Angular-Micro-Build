import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() sendMessage = new EventEmitter<string>();

  sendDataToParent() {
    const data = "Hello Sending Data from Child"
    this.sendMessage.emit(data);
  }
}
