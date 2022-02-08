import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {

  color?: string;
  fontSize?: string;
  constructor() { }

  ngOnInit(): void {
    this.color = 'black';
    this.fontSize = '30';
  }

  apply(color: string, fontSize: string): void {
    this.color = color;
    this.fontSize = fontSize;
  }

}
