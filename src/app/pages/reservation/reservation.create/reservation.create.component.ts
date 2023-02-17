import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import { cH } from '@fullcalendar/core/internal-common';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

import { IReservation } from './../../../models/reservation';
import { ReservationService } from './../../../services/reservation.service';




@Component({
  selector: 'app-reservation.create',
  templateUrl: './reservation.create.component.html',
  styleUrls: ['./reservation.create.component.css']
})



export class ReservationCreateComponent implements OnInit {
  verify:boolean = true;
  events = JSON.parse(localStorage.getItem('events'))
  term:boolean = false;


  reservation: IReservation = {
    id:'',
    openDate:'',
    reserveDate:'',
    time:'',
    localReservation:'',
    reservationAuthorite:'',
    person:'',
    personName:''


  }


  date: FormControl = new FormControl(null, Validators.required);
  time: FormControl = new FormControl(null, Validators.required);
  localReservation: FormControl = new FormControl(null, Validators.required);


  constructor( 
    private router: Router,
    private service: ReservationService,
    private toast: ToastrService
    ) {}

  ngOnInit(): void {
    setTimeout( function() {
      window.dispatchEvent(new Event('resize'))
  }, 1)
  
  }


  create():void {
    let newDate: moment.Moment = moment.utc(this.reservation.reserveDate).local(); 
    this.reservation.reserveDate = newDate.format('YYYY-MM-DD') + "T" + this.reservation.time
    this.reservation.person = localStorage.getItem('id');
    this.reservation.reservationAuthorite = '1';
   
    this.checkDate(this.reservation.reserveDate)
      
    if(this.verify) {
      this.service.create(this.reservation).subscribe(response => {
        this.router.navigate(['reservations'])
        this.toast.success("Reserva efetuada,aguarde aprovação!!");
        
  }, ex => {
    this.toast.error(ex.error.error)
    
  })
    
      
    }else {
     this.toast.info("Já existe uma reserva para esta data. Escolha uma nova data ou horário")
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

  async checkDate(date:any){
    let title = this.returnLocal(this.reservation.localReservation)
    await this.events.map(event => {
      if(date+':00' == event.date ) {
        if(event.title == title) {
         this.verify = false
        }
      }else {
        this.verify = true;
      }
    })
  }

  
  fieldValidate(): boolean {
    return this.date.valid && 
           this.time.valid && 
           this.localReservation.valid &&
           this.term
          
  }
  
igree(cod:any) {
  if(cod == '0') {
    this.term = !this.term
  }
}

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      start:'prev, next',
      center:'title',
      end:'dayGridMonth,timeGridDay'
    },
    editable:true,
    locale: ptLocale,
    eventColor:'blue',
    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'timeGridWeek',
    weekends: true,
    aspectRatio:2,
    events:this.events
  }  
 

}
