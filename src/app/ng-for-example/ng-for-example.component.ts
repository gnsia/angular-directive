import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  cities!: string[];
  people = [
    { name: 'donghun', age: 35, city: 'Seoul' },
    { name: 'heejin', age: 33, city: 'Seoul' },
    { name: 'gildong', age: 27, city: 'Hanyang' }
  ]

  peopleByCity = [
    {
      city: 'Miami',
      people: [
        { name: 'John', age: 12 },
        { name: 'Angel', age: 22 }
      ]
    },
    {
      city: 'Sao Paulo',
      people: [
        { name: 'Anderson', age: 35 },
        { name: 'Felipe', age:36 }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.cities = ['Seoul', 'Daegu', 'Busan'];
    
  }

}
