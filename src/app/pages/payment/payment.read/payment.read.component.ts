import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPayment } from './../../../models/payment';
import { PaymentService } from './../../../services/payment.service';

@Component({
  selector: 'app-payment.read',
  templateUrl: './payment.read.component.html',
  styleUrls: ['./payment.read.component.css']
})
export class PaymentReadComponent implements OnInit{
  payment:IPayment = {
    title:'',
    situation:'',
    cash:0,
    person:'',
    personName:'',
    datePayment:'',
    finishPayment:''
  }
  
  
     constructor(
      private paymentService: PaymentService,
      private router: Router,
      private routes: ActivatedRoute
      ) {}
  
     ngOnInit(): void {
      this.payment.id = this.routes.snapshot.paramMap.get('id');
        this.findById();
        
     }

     findById():void {
      this.paymentService.findById(this.payment.id).subscribe(response => {
        this.payment = response;

        this.payment.situation = this.payment.situation == 0 ? 'ABERTO': 'ENCERRADO'
      })
     }

  


  
     goBack():void {
      this.router.navigate(['payments'])
    }
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
    
    }
  
}
