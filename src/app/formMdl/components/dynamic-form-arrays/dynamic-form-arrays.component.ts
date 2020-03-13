import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-dynamic-form-arrays",
  templateUrl: "./dynamic-form-arrays.component.html",
  styleUrls: ["./dynamic-form-arrays.component.scss"]
})
export class DynamicFormArraysComponent implements OnInit {
  constructor(private fb: FormBuilder) {
  }

  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([])
  });
  profileGroup = this.fb.group({
    us: [''],
    en: ['']

  });

  ngOnInit() {}

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  addAliases() {
    console.log('aaaaaaaaaaa');
    this.aliases.push(this.profileGroup);
    console.log(this.aliases.controls);
  }

  /**
   * add array of formGroup
   */

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
