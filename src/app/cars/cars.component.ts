import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carStatus = false;
  carName;
  cars = ['bmw', 'audi', ' merce', 'opel'];
  // input = '';

  items = [
    new Date(2015, 5,1).toDateString(),
    new Date(2015, 5,1).toDateString(),
    new Date(2015, 5,1).toDateString(),
    new Date(2015, 5,1).toDateString(),
  ];

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    this.carStatus = true;
    this.cars.push(this.carName);
  }

  // getLength(car) {
  //   return car.length > 3 ? true : false;
  // }

  // onKeyUp(value) {
  //   this.input = value;
  // }

}
