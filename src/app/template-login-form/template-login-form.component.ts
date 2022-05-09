import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../auth-model';

@Component({
  selector: 'app-template-login-form',
  templateUrl: './template-login-form.component.html',
  styleUrls: ['./template-login-form.component.css']
})
export class TemplateLoginFormComponent implements OnInit {

  authModel!: AuthModel;

  constructor() {
    
    alert('cons');
   }

  ngOnInit() {
    alert('init...');
    this.authModel=new AuthModel();
  }

  onSubmit(){
    alert('hiiii')
    alert(this.authModel.username)
  }

}
