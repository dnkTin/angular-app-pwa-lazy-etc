import { RouterModule, Routes } from '@angular/router';
import { FormReactComponent } from './components/form-react/form-react.component';
import { NgModule } from '@angular/core';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { NestedFormGroupsComponent } from './components/nested-form-groups/nested-form-groups.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

const routes: Routes = [
  {path: '', component: FormReactComponent},
  {path: 'profileEditor', component: ProfileEditorComponent},
  {path: 'nestedFormGroup', component: NestedFormGroupsComponent},
  {path: 'formBuilder', component: FormBuilderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMdlRouginModule {}
