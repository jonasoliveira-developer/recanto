import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


import { ICredentials } from './../../models/credentials';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router
    ) {}

  ngOnInit(): void {
    
  }

  logar():void {
    this.service.authenticate(this.creds).subscribe(response => {
       this.service.successFullLogin(response.headers.get('Authorization').substring(7))
       this.router.navigate(['home']);
    }, () => {
      this.tost.error('Usuário e/ou senha inválidos!!')
    }) 
  }

  fieldValidator(): boolean {
    return this.email.valid && this.password.valid
  }

}
