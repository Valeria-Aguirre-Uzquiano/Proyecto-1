import { Component } from '@angular/core';

declare const moveUp: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1';
  onClick(){
    moveUp();
  }
}
