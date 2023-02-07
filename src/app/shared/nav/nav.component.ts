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
  name:string  = '';
  constructor(
    private router: Router,
    private auth: AuthService,
    private tost: ToastrService
    
   ) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('user');
   
  }

  logout():void {
    this.router.navigate(['login'])
    this.auth.lougout();
    this.tost.info("Logout realizado com sucesso!!")
  }

}
