import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAnnoucements } from 'src/app/models/annoucements';
import { AnnoucementsService } from 'src/app/services/annoucements.service';

@Component({
  selector: 'app-annoucements.create',
  templateUrl: './annoucements.create.component.html',
  styleUrls: ['./annoucements.create.component.css']
})
export class AnnoucementsCreateComponent implements OnInit{
  annoucement: IAnnoucements = {
    id:'',
    title:'',
    description:'',
    dateOpen:'',
    person:'',
    personName:'',
  
  }
  
  title: FormControl = new FormControl(null, Validators.required);
  person: FormControl = new FormControl(null, Validators.required);
  description: FormControl = new FormControl(null, Validators.required);

  
    constructor( 
      private service: AnnoucementsService,
      private toast: ToastrService,
      private router: Router
      ) {}
  
    ngOnInit(): void {
      
    }
  
    create():void {
      this.annoucement.person = localStorage.getItem('id');
      this.service.create(this.annoucement).subscribe(respose => {
        this.router.navigate(['annoucements'])
        this.toast.success("Aviso  cadastrado com sucesso!");
      }, ex => {
        if(ex.error.errors) {
          ex.error.errors.map(x => this.toast.error(x.message))
        }
        else {
          this.toast.error(ex.error.message)
        }
      })
    }
    
  
  
  
      fieldValidate(): boolean {
        return this.title.valid && 
               this.description.valid          
      }
      
      goBack():void {
        this.router.navigate(['annoucements'])
      }
  }
  