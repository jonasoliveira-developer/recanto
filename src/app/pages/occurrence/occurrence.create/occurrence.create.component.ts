import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IOccurrence } from './../../../models/occurences';
import { OccurrenceService } from './../../../services/occurrence.service';

@Component({
  selector: 'app-occurrence.create',
  templateUrl: './occurrence.create.component.html',
  styleUrls: ['./occurrence.create.component.css']
})


export class OccurrenceCreateComponent  implements OnInit{
  occurrence:IOccurrence = {
    title:'',
    description:'',
    situation:'',
    person:'',
    personName:'',
    openDate:'',
    finishDate:'',
  
  }
  
  
  title: FormControl = new FormControl(null, Validators.required);
  description: FormControl = new FormControl(null, Validators.required);
  situation: FormControl = new FormControl(null, Validators.required);
  resident: FormControl = new FormControl(null, Validators.required);
  
  
  
     constructor(
      private service: OccurrenceService,
      private toast: ToastrService,
      private router: Router
      ) {}
  
     ngOnInit(): void {
     
     }
  
   
  
     create():void {
      this.service.create(this.occurrence).subscribe(response => {
          this.router.navigate(['occurrences'])
          this.toast.success("Ocorrência criada com sucesso");
  
  
      }, ex => {
        this.toast.error(ex.error.error)
        
      })
     }
  
  
     goBack():void {
      this.router.navigate(['occurrences'])
    }
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
    
    }
  }
  