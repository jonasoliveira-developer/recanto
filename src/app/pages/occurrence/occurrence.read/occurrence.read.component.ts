import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOccurrence } from 'src/app/models/occurences';

import { OccurrenceService } from './../../../services/occurrence.service';

@Component({
  selector: 'app-occurrence.read',
  templateUrl: './occurrence.read.component.html',
  styleUrls: ['./occurrence.read.component.css']
})
export class OccurrenceReadComponent implements OnInit{
  occurrence:IOccurrence = {
    title:'',
    description:'',
    situation:'',
    person:'',
    personName:'',
    openDate:'',
    finishDate:'',
  
  }
  
  
     constructor(
      private occurrenceService: OccurrenceService,
      private router: Router,
      private routes: ActivatedRoute
      ) {}
  
     ngOnInit(): void {
      this.occurrence.id = this.routes.snapshot.paramMap.get('id');
        this.findById();
        
     }

     findById():void {
      this.occurrenceService.findById(this.occurrence.id).subscribe(response => {
        this.occurrence = response;

        this.occurrence.situation = this.occurrence.situation == 0 ? 'ABERTO': 'ENCERRADO'
      })
     }

  


  
     goBack():void {
      this.router.navigate(['occurrences'])
    }
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
    
    }
  
}
