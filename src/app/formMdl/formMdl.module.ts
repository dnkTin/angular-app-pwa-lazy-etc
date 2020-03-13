import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormMdlRouginModule as FormMdlRoutingModule } from "./FormMdl-routing.module";
import { FormReactComponent } from "./components/form-react/form-react.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProfileEditorComponent } from "./components/profile-editor/profile-editor.component";
import { NestedFormGroupsComponent } from "./components/nested-form-groups/nested-form-groups.component";
import { FormBuilderComponent } from "./components/form-builder/form-builder.component";
import { DynamicFormArraysComponent } from "./components/dynamic-form-arrays/dynamic-form-arrays.component";
import { TmplateFormComponent } from './components/tmplate-form/tmplate-form.component';
import { CustomersComponent } from '../customers/customers.component';
import { HeroFormReactiveComponent } from './components/hero-form-reactive/hero-form-reactive.component';
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
  CustomersComponent
];
@NgModule({
  declarations: [
    ...components,
    HeroFormReactiveComponent
  ],
  imports: [
    CommonModule,
    ...formMdls,
  ]
})
export class FormMdlModule {}
