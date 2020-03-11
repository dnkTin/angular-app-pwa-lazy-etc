import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-groups',
  templateUrl: './nested-form-groups.component.html',
  styleUrls: ['./nested-form-groups.component.scss']
})
export class NestedFormGroupsComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl()
    }),
  });
  ngOnInit() {
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nacy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
