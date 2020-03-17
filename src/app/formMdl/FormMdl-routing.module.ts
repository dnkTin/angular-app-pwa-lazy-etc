import { RouterModule, Routes } from "@angular/router";
import { FormReactComponent } from "./components/form-react/form-react.component";
import { NgModule } from "@angular/core";
import { ProfileEditorComponent } from "./components/profile-editor/profile-editor.component";
import { NestedFormGroupsComponent } from "./components/nested-form-groups/nested-form-groups.component";
import { FormBuilderComponent } from "./components/form-builder/form-builder.component";
import { DynamicFormArraysComponent } from "./components/dynamic-form-arrays/dynamic-form-arrays.component";
import { TmplateFormComponent } from "./components/tmplate-form/tmplate-form.component";
import { HeroFormReactiveComponent } from './components/hero-form-reactive/hero-form-reactive.component';
import { DynamicFrmComponent } from './components/dynamic-frm/dynamic-frm.component';

const routes: Routes = [
  { path: "", component: FormReactComponent },
  { path: "profileEditor", component: ProfileEditorComponent },
  { path: "nestedFormGroup", component: NestedFormGroupsComponent },
  { path: "formBuilder", component: FormBuilderComponent },
  { path: "dynamicControl", component: DynamicFormArraysComponent },
  { path: "tmplateForm", component: TmplateFormComponent },
  { path: "hero-reactive", component: HeroFormReactiveComponent },
  { path: "dynamic", component: DynamicFrmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMdlRoutingModule {}
