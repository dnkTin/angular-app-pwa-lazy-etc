import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: "app-form-builder",
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.scss"]
})
export class FormBuilderComponent implements OnInit {
  profileForm: FormGroup = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    })
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
