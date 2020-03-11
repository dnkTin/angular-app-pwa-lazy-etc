import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormMdlRouginModule as FormMdlRoutingModule } from "./FormMdl-routing.module";
import { FormReactComponent } from "./components/form-react/form-react.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProfileEditorComponent } from "./components/profile-editor/profile-editor.component";
import { NestedFormGroupsComponent } from './components/nested-form-groups/nested-form-groups.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
@NgModule({
  declarations: [FormReactComponent, ProfileEditorComponent, NestedFormGroupsComponent, FormBuilderComponent],
  imports: [
    CommonModule,
    FormMdlRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormMdlModule {}
