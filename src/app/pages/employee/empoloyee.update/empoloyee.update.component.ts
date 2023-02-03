import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './../../../services/employee.service';
import { FormControl, Validators } from '@angular/forms';
import { IEmployee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empoloyee.update',
  templateUrl: './empoloyee.update.component.html',
  styleUrls: ['./empoloyee.update.component.css']
})
export class EmpoloyeeUpdateComponent implements OnInit{
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
      private router: Router,
      private route: ActivatedRoute
      ) {}
  
    ngOnInit(): void {
      this.employee.id = this.route.snapshot.paramMap.get('id');
      this.findById();
    }

    findById():void {
      this.service.findById(this.employee.id).subscribe(response => {
        response.profiles = [];
        this.employee = response;
        console.log(response)
      })
    }
  
    update():void {
      this.service.update(this.employee).subscribe(respose => {
        this.router.navigate(['employees'])
        this.toast.success("Funcionário atualizado com sucesso!");
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
