import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

import { IReservation } from './../../../models/reservation';
import { ReservationService } from './../../../services/reservation.service';

@Component({
  selector: 'app-reservation.delete',
  templateUrl: './reservation.delete.component.html',
  styleUrls: ['./reservation.delete.component.css']
})
export class ReservationDeleteComponent {

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
  reservationAuthorite: FormControl = new FormControl(null, Validators.required);


  constructor( 
    private router: Router,
    private routes: ActivatedRoute,
    private service: ReservationService,
    private toast: ToastrService
    ) {}

  ngOnInit(): void {
    this.reservation.id = this.routes.snapshot.paramMap.get('id');
    this.findById();
    setTimeout( function() {
      window.dispatchEvent(new Event('resize'))
  }, 1)
  
  }

  findById():void {
    this.service.findById(this.reservation.id).subscribe(response => {
      
      this.reservation = response;
      
    })

  }

delete():void {
  this.service.delete(this.reservation.id).subscribe(response => {
    this.router.navigate(['reservations'])
    this.toast.success("Reserva deletada com sucesso")
  })
}
  
  fieldValidate(): boolean {
    return this.date.valid && 
           this.time.valid && 
           this.localReservation.valid 
          
          
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
  
igree(cod:any) {
  if(cod == '0') {
    this.term = !this.term
  }
}

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      start:'prev, next, today',
      center:'title',
      end:'dayGridMonth, timeGridWeek,timeGridDay'
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

  goBack():void {
    this.router.navigate(['reservations'])
  }
 

}
