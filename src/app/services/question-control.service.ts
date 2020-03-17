import { Injectable } from "@angular/core";
import { QuestionBase } from "../_model/question-base";
import { Validators, FormControl, FormGroup } from "@angular/forms";

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    let group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required
        ? new FormControl(question.value || "", Validators.required)
        : new FormControl(question.value || "");
    });

    return new FormGroup(group);
  }
}
