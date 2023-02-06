import { Router } from '@angular/router';
import { IPayment } from './../../../models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { ResidentService } from './../../../services/resident.service';
import { IResident } from './../../../models/residents';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment.create',
  templateUrl: './payment.create.component.html',
  styleUrls: ['./payment.create.component.css']
})

export class PaymentCreateComponent implements OnInit {

payment:IPayment = {
  title:'',
  situation:'',
  cash:0,
  person:'',

}

  residents: IResident[] = [];


title: FormControl = new FormControl(null, Validators.required);
cash: FormControl = new FormControl(null, Validators.required);
situation: FormControl = new FormControl(null, Validators.required);
resident: FormControl = new FormControl(null, Validators.required);



   constructor(
    private residentService: ResidentService,
    private paymentService: PaymentService,
    private toast: ToastrService,
    private router: Router
    ) {}

   ngOnInit(): void {
     this.findAllResidents();
   }

   findAllResidents():void {
    this.residentService.findAll().subscribe(response => {
      this.residents = response;
    })
   }

   create():void {
    this.paymentService.create(this.payment).subscribe(response => {
        this.router.navigate(['payments'])
        this.toast.success("Pagamento criado com sucesso");
        console.log(this.payment)


    }, ex => {
      this.toast.error(ex.error.error)
      
    })
   }

   goBack():void {
    this.router.navigate(['payments'])
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  
  }
}
