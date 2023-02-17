import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResidentService } from '../../../services/resident.service';
import { FormControl, Validators } from '@angular/forms';
import { IResident } from './../../../models/residents';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident.update',
  templateUrl: './resident.update.component.html',
  styleUrls: ['./resident.update.component.css']
})
export class ResidentUpdateComponent implements OnInit{
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
      private router: Router,
      private route: ActivatedRoute
      ) {}
  
    ngOnInit(): void {
      this.resident.id = this.route.snapshot.paramMap.get('id');
      this.findById();
    }

    findById():void {
      this.service.findById(this.resident.id).subscribe(response => {
        response.profiles = [];
        this.resident = response;
      })
    }
  
    update():void {
      this.service.update(this.resident).subscribe(respose => {
        this.router.navigate(['residents'])
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
       
        if(this.resident.profiles.includes(profile)){
          this.resident.profiles.splice(this.resident.profiles.indexOf(profile))
        }
        else {
          this.resident.profiles.push(profile)
        }
  
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
