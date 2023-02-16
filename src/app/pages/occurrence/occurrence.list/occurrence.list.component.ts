import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { OccurrenceService } from 'src/app/services/occurrence.service';

import { IOccurrence } from './../../../models/occurences';

@Component({
  selector: 'app-occurrence.list',
  templateUrl: './occurrence.list.component.html',
  styleUrls: ['./occurrence.list.component.css']
})
export class OccurrenceListComponent implements OnInit {
  role:string = ''
  filter:any = ''
  ELEMENT_DATA: IOccurrence[] = [];
  FILTERED_DATA: IOccurrence[] = [];
  
  p: number = 1;
  collection: any[] =[]

  @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private service: OccurrenceService) {}


    ngOnInit(): void {
      this.filter =  localStorage.getItem('id')
      this.role = localStorage.getItem('roles')
      this.findAll();
    }


    findAll(): void {
      this.service.findAll().subscribe(response => {
        this.ELEMENT_DATA = response;
        this.FILTERED_DATA = response;

        if(this.role.includes('ROLE_RESIDENT') 
        && !this.role.includes('ROLE_ADMIN')
        && !this.role.includes('ROLE_EMPLOYEE')) {
          this.filterByUser()
        }
      })
     }


     filterByUser() {
      let list: IOccurrence[] = [];
        this.ELEMENT_DATA.map(occurrence => {
           if(occurrence.person == this.filter) {
             list.push(occurrence)
           }
      })
      this.ELEMENT_DATA = list;
      
     }

     situationReturn(situatin:any): string {
      return situatin == 0 ? 'ABERTO': 'ENCERRADO';
     }

     returnColor(color:any):string {
      if(color == '0'){
        return color = '#0000CD'
     }
     else{
        return color = '#DB1B1B'
     }
     
     }

    
     applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
       this.ELEMENT_DATA = this.FILTERED_DATA.filter(element =>{
        return element.title.toLowerCase().includes(filterValue.toLowerCase());
       })
       
    }


}
