import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IOccurrence } from './../../../models/occurences';
import { OccurrenceService } from './../../../services/occurrence.service';

@Component({
  selector: 'app-occurrence.delete',
  templateUrl: './occurrence.delete.component.html',
  styleUrls: ['./occurrence.delete.component.css']
})
export class OccurrenceDeleteComponent implements OnInit{
  occurrence:IOccurrence = {
    id:'',
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
 
  
  
  
     constructor(
      private service: OccurrenceService,
      private toast: ToastrService,
      private router: Router,
      private routes : ActivatedRoute
      ) {}
  
     ngOnInit(): void {
      this.occurrence.id = this.routes.snapshot.paramMap.get('id');
      this.findById();
     }
  
     findById():void {
      this.service.findById(this.occurrence.id).subscribe(response => {
        this.occurrence = response;
      })
     }
  
     delete():void {
      this.service.delete(this.occurrence.id).subscribe(response => {
          this.router.navigate(['occurrences'])
          this.toast.success("Ocorrência deletada com sucesso");
  
  
      }, ex => {
        this.toast.error(ex.error.error)
        
      })
     }

     situationReturn(situatin:any): string {
      return situatin == 0 ? 'ABERTO': 'ENCERRADO';
     }
  
  
  
     goBack():void {
      this.router.navigate(['occurrences'])
    }

    fieldValidate(): boolean {
      return this.title.valid && 
             this.description.valid && 
             this.situation.valid 
    }
    
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
    
    }
  }
  