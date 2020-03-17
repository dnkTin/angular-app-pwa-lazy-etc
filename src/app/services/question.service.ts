import { Injectable } from '@angular/core';
import { TextboxQuestion } from '../_model/question-textbox';
import { DropdownQuestion } from '../_model/question-dropdown';
import { QuestionBase } from '../_model/question-base';


@Injectable()
export class QuestionService {
  getQuestions() {
    let questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
  }
}
