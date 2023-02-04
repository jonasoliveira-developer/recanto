import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IResident } from './../../../models/residents';
import { ResidentService } from '../../../services/resident.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident.create',
  templateUrl: './resident.create.component.html',
  styleUrls: ['./resident.create.component.css']
})
export class ResidentCreateComponent  implements OnInit{

resident: IResident = {
  id:'',
  name:'',
  cpf:'',
  email:'',
  password:'',
  profiles: [],
  date:''
  
  

}

name: FormControl = new FormControl(null, Validators.minLength(3));
cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.required]);
email: FormControl = new FormControl(null, Validators.email);
password: FormControl = new FormControl(null, Validators.minLength(3))

  constructor( 
    private service: ResidentService,
    private toast: ToastrService,
    private router: Router
    ) {}

  ngOnInit(): void {
    
  }

  create():void {
    this.service.create(this.resident).subscribe(respose => {
      this.router.navigate(['residents'])
      this.toast.success("Funcionário cadastrado com sucesso!");
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.map(x => this.toast.error(x.message))
      }
      else {
        this.toast.error(ex.error.message)
      }
    })
  }
  
  addProfile(profile:any):void {
     
      if(this.resident.profiles.includes(profile)){
        this.resident.profiles.splice(this.resident.profiles.indexOf(profile))
      }
      else {
        this.resident.profiles.push(profile)
      }

      console.log(this.resident.profiles)
    }



    fieldValidate(): boolean {
      return this.name.valid && 
             this.cpf.valid && 
             this.email.valid && 
             this.password.valid
    }
    
    goBack():void {
      this.router.navigate(['residents'])
    }
}
