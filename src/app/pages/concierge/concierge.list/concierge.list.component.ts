import { Component, OnInit } from '@angular/core';

import { IConcierge } from './../../../models/concierge';
import { ConciergeService } from './../../../services/concierge.service';

@Component({
  selector: 'app-concierge.list',
  templateUrl: './concierge.list.component.html',
  styleUrls: ['./concierge.list.component.css']
})


export class ConciergeListComponent implements OnInit{
  role:string = '';
  filter:any = '';
  calendar: any[] = [];
  ELEMENT_DATA: IConcierge[] = [];
  FILTERED_DATA: IConcierge[] = [];

  p: number = 1;
  collection: any[] =[]
  

    constructor(private service: ConciergeService) {}


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
      let list: IConcierge[] = [];
        this.ELEMENT_DATA.map(concierge => {
           if(concierge.person == this.filter) {
             list.push(concierge)
           }
      })
      this.ELEMENT_DATA = list;

      
     }

     showComponentByUser():boolean {
      if(this.role.includes('ROLE_RESIDENT') 
      && !this.role.includes('ROLE_ADMIN')
      && !this.role.includes('ROLE_EMPLOYEE')) {
        return false
      }
    
      else {
        return true
      }
    
      
     }
     
    

     returnAuthorite(mode:any): string {
      if(mode == '0') {
        return 'ABERTO'
      }else{
        return 'ENCERRADO'
      }
     }

     returnLocal(mode:any): string {
      if(mode == '0') {
        return 'CHURRASQUEIRA'
      }
      if(mode == '1') {
        return 'QUADRA'
      }else {
        return 'SALÃO'
      }
     }

     returnColor(color:any):string {
      if(color == '0'){
        return color = '#DAB568'
     }
     else{
        return color = ' rgb(59, 95, 180)'
     }
     
     }

    

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
       this.ELEMENT_DATA = this.FILTERED_DATA.filter(element =>{
        return element.title.toLowerCase().includes(filterValue.toLowerCase());
       
       })

       this.filterByUser();
       
     
    }
  }

   