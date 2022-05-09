import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateLoginFormComponent } from './template-login-form.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateLoginFormComponent],
  exports:[TemplateLoginFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateLoginFormModule { }
