import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.scss']
})
export class FormReactComponent implements OnInit {
  favoriteColor = '';
  favoriteColorControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.favoriteColorControl.setValue('new value');
  }

}
