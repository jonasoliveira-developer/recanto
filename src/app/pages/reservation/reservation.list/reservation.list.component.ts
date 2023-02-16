import { Component, OnInit } from '@angular/core';

import { IReservation } from './../../../models/reservation';
import { ReservationService } from './../../../services/reservation.service';



@Component({
  selector: 'app-reservation.list',
  templateUrl: './reservation.list.component.html',
  styleUrls: ['./reservation.list.component.css']
})
export class ReservationListComponent implements OnInit{
  role:string = '';
  filter:any = '';
  calendar: any[] = [];
  color: '';
  events:any[] = [];
  ELEMENT_DATA: IReservation[] = [];
  FILTERED_DATA: IReservation[] = [];

  p: number = 1;
  collection: any[] =[]
  

    constructor(private service: ReservationService) {}


    ngOnInit(): void {
      this.filter =  localStorage.getItem('id')
      this.role = localStorage.getItem('roles')
      this.findAll();
    }


    findAll(): void {
     
      this.service.findAll().subscribe(response => {
        this.ELEMENT_DATA = response;
        this.FILTERED_DATA = response;

        this.calendar =  response.map(element => {

          return {
            title:this.returnLocal(element.localReservation),
            date:element.reserveDate,
            color:this.returnColor(element.reservationAuthorite)
           
          }
        })
        this.events.push(this.calendar)
        localStorage.setItem('events', JSON.stringify(this.calendar))
        
        if(this.role.includes('ROLE_RESIDENT') 
        && !this.role.includes('ROLE_ADMIN')
        && !this.role.includes('ROLE_EMPLOYEE')) {
          this.filterByUser()
        }
        
      })
     }

     filterByUser() {
      let list: IReservation[] = [];
        this.ELEMENT_DATA.map(resident => {
           if(resident.person == this.filter) {
             list.push(resident)
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
        return 'AUTORIZADO'
      }
      if(mode == '1') {
        return 'PENDENTE'
      }else {
        return 'NÃO AUTORIZADO'
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
        return color = '#0000CD'
     }
     if(color == '1') {
        return color = '#DAB568'
     }
     else{
        return color = '#DB1B1B'
     }
     
     }



     orderBySituation(local:any): void {
      let list: IReservation[] = [];
       this.ELEMENT_DATA.map(reservation => {
          if(reservation.localReservation == local) {
            list.push(reservation)
          }
      })
      this.ELEMENT_DATA = list;

     }
    

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
       this.ELEMENT_DATA = this.FILTERED_DATA.filter(element =>{
        return element.personName.toLowerCase().includes(filterValue.toLowerCase());
       })
       
     
    }

   
}
