import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IEmployee } from './../../../models/employee';
import { EmployeeService } from './../../../services/employee.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empoloyee.create',
  templateUrl: './empoloyee.create.component.html',
  styleUrls: ['./empoloyee.create.component.css']
})
export class EmpoloyeeCreateComponent  implements OnInit{

employee: IEmployee = {
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
    private service: EmployeeService,
    private toast: ToastrService,
    private router: Router
    ) {}

  ngOnInit(): void {
    
  }

  create():void {
    this.service.create(this.employee).subscribe(respose => {
      this.router.navigate(['employees'])
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
     
      if(this.employee.profiles.includes(profile)){
        this.employee.profiles.splice(this.employee.profiles.indexOf(profile))
      }
      else {
        this.employee.profiles.push(profile)
      }

      console.log(this.employee.profiles)
    }



    fieldValidate(): boolean {
      return this.name.valid && 
             this.cpf.valid && 
             this.email.valid && 
             this.password.valid
    }
    
    goBack():void {
      this.router.navigate(['employees'])
    }
}
