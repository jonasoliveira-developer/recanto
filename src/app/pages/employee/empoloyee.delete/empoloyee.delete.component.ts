import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './../../../services/employee.service';
import { FormControl, Validators } from '@angular/forms';
import { IEmployee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empoloyee.delete',
  templateUrl: './empoloyee.delete.component.html',
  styleUrls: ['./empoloyee.delete.component.css']
})
export class EmpoloyeeDeleteComponent {

  employee: IEmployee = {
    id:'',
    name:'',
    cpf:'',
    email:'',
    password:'',
    profiles: [],
    date:''
    
    
  
  }
  
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
      })
    }
  
    delete():void {
      this.service.delete(this.employee.id).subscribe(respose => {
        this.router.navigate(['employees'])
        this.toast.success("Funcionário deletado com sucesso!");
      }, ex => {
        if(ex.error.errors) {
          ex.error.errors.map(x => this.toast.error(x.message))
        }
        else {
          this.toast.error(ex.error.message)
        }
      })
    }
      
      goBack():void {
        this.router.navigate(['employees'])
      }

}
