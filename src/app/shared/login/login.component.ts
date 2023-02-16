import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ICredentials } from './../../models/credentials';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {
  colorControl = new FormControl('primary' as ThemePalette);
 
creds: ICredentials = {
  email:'',
  password:''
}



email = new FormControl(null, Validators.email);
password = new FormControl(null, Validators.minLength(3));


  constructor(
    private tost: ToastrService,
    private service: AuthService,
    private router: Router,
 
    ) {}

  ngOnInit(): void {
    
  }

  logar():void {
    this.service.authenticate(this.creds).subscribe(response => {
      let authorite =  response.headers.get('Authorization').split("[")
      let token =  response.headers.get('Authorization').split(" ")
       this.service.successFullLogin(token[1]);
       localStorage.setItem('id', token[2]);
       localStorage.setItem('user', token[3]);
       localStorage.setItem('roles', authorite[1].replace(']', ' '));
       this.router.navigate(['home']);
        
    }, () => {
      this.tost.error('Usuário e/ou senha inválidos!!')
    }) 
  }

 
  fieldValidator(): boolean {
    return this.email.valid && this.password.valid
  }

}
