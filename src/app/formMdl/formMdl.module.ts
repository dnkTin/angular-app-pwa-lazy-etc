import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormMdlRoutingModule as FormMdlRoutingModule } from "./FormMdl-routing.module";
import { FormReactComponent } from "./components/form-react/form-react.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProfileEditorComponent } from "./components/profile-editor/profile-editor.component";
import { NestedFormGroupsComponent } from "./components/nested-form-groups/nested-form-groups.component";
import { FormBuilderComponent } from "./components/form-builder/form-builder.component";
import { DynamicFormArraysComponent } from "./components/dynamic-form-arrays/dynamic-form-arrays.component";
import { TmplateFormComponent } from './components/tmplate-form/tmplate-form.component';
import { CustomersComponent } from '../customers/customers.component';
import { HeroFormReactiveComponent } from './components/hero-form-reactive/hero-form-reactive.component';
import { DynamicFrmComponent } from './components/dynamic-frm/dynamic-frm.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { QuestionControlService } from '../services/question-control.service';
const formMdls = [
  FormMdlRoutingModule,
  ReactiveFormsModule,
  FormsModule
];
const components = [
  FormReactComponent,
  ProfileEditorComponent,
  NestedFormGroupsComponent,
  FormBuilderComponent,
  DynamicFormArraysComponent,
  TmplateFormComponent,
  CustomersComponent,
  HeroFormReactiveComponent
];
@NgModule({
  declarations: [
    ...components,
    HeroFormReactiveComponent,
    DynamicFrmComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    ...formMdls,
  ],
  providers: [
    QuestionControlService
  ]
})
export class FormMdlModule {}
