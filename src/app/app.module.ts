import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule
} from "@angular/material";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const materialModule = [MatToolbarModule, MatCardModule, MatButtonModule, MatTabsModule];
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...materialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
