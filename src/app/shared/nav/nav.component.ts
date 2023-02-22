import { LoaderService } from './../../services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  authority:boolean = false;
  role:string=''
  constructor(
    private router: Router,
    private auth: AuthService,
    private tost: ToastrService,
    public loaderService: LoaderService
    
   ) {}

  ngOnInit(): void {
    this.role =  localStorage.getItem('roles')
    this.checkAuthorite(this.role)
   
  }

  checkAuthorite(auth: string):boolean {
    if(this.role.includes('ROLE_ADMIN') || this.role.includes( 'ROLE_EMPLOYEE')) {
     return  this.authority = true

    }
    else {
      return this.authority = false
    }
     
  }

  logout():void {
    this.router.navigate(['login'])
    this.auth.lougout();
    this.tost.info("Logout realizado com sucesso!!")
  }


}
