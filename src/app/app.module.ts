import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateLoginFormModule } from './template-login-form/template-login-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateLoginFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
