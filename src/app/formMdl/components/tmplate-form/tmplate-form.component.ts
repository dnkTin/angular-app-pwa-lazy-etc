import { Component, OnInit, ViewChild } from '@angular/core';
import Hero from '../../../_model/Hero';
import { CustomersComponent } from '../../../customers/customers.component';

@Component({
  selector: 'app-tmplate-form',
  templateUrl: './tmplate-form.component.html',
  styleUrls: ['./tmplate-form.component.scss']
})
export class TmplateFormComponent implements OnInit {
  // thay doi gia tri cua title trong customer va check xem gia tri do co bi thay doi tai route customer khong
  // @ViewChild('customer',) customer: CustomersComponent;
  myHero: Hero = new Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
  powers = [
    'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'
  ];
  model = new Hero(18, 'Dr Iq', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(32, '', '');
  }

}
