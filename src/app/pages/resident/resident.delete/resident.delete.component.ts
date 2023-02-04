import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResidentService } from '../../../services/resident.service';
import { FormControl, Validators } from '@angular/forms';
import { IResident } from './../../../models/residents';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident.delete',
  templateUrl: './resident.delete.component.html',
  styleUrls: ['./resident.delete.component.css']
})
export class ResidentDeleteComponent implements OnInit{

  resident: IResident = {
    id:'',
    name:'',
    cpf:'',
    email:'',
    password:'',
    profiles: [],
    date:''
    
    
  
  }
  
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
  
    delete():void {
      this.service.delete(this.resident.id).subscribe(respose => {
        this.router.navigate(['residents'])
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
        this.router.navigate(['residents'])
      }

}
