import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directive';
  a: number = 10;
  b: number = 5;
  str: string = 'yes';
  myVar: string = 'D';

  myfunction(): boolean {
    return true;
  }
}
