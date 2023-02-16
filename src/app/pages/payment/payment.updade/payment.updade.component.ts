import { ResidentService } from './../../../services/resident.service';
import { PaymentService } from './../../../services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPayment } from './../../../models/payment';
import { IResident } from './../../../models/residents';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment.updade',
  templateUrl: './payment.updade.component.html',
  styleUrls: ['./payment.updade.component.css']
})


export class PaymentUpdadeComponent implements OnInit{
  payment:IPayment = {
    title:'',
    situation:'',
    modePayment:'',
    cash:0,
    person:'',
    personName:''
  
  }

  title: FormControl = new FormControl(null, Validators.required);
  situation : FormControl = new FormControl(null, Validators.required);
  modePayment : FormControl = new FormControl(null, Validators.required);
  cash: FormControl = new FormControl(null, Validators.required);
  personName: FormControl = new FormControl(null, Validators.required);
  
    residents: IResident[] = [];
  
  
     constructor(
      private paymentService: PaymentService,
      private residentService: ResidentService,
      private toast: ToastrService,
      private router: Router,
      private routes: ActivatedRoute
      ) {}
  
     ngOnInit(): void {
       this.findAllResidents();
       this.payment.id = this.routes.snapshot.paramMap.get('id');
       this.findById();
     }

     findById():void {
      this.paymentService.findById(this.payment.id).subscribe(response => {
        this.payment = response;
      })
     }
  
     findAllResidents():void {
      this.residentService.findAll().subscribe(response => {
        this.residents = response;
      })
     }

     situationReturn(situatin:any): string {
      return situatin == 0 ? 'ABERTO': 'ENCERRADO';
     }

     returnModePayment(mode:any): string {
      if(mode == '0') {
        return 'DINHEIRO'
      }
      if(mode == '1') {
        return 'CARTÃO'
      }else {
        return 'PIX'
      }
     }
  
     update():void {
      this.paymentService.update(this.payment).subscribe(response => {
          this.router.navigate(['payments'])
          this.toast.success("Pagamento atualizado com sucesso");
   
  
      }, ex => {
        this.toast.error(ex.error.error)
    
        console.log(this.payment)
        
      })
     }

     fieldValidate(): boolean {
      return this.title.valid && 
             this.situation.valid && 
             this.cash.valid && 
             this.personName.valid
    }
    
  
     goBack():void {
      this.router.navigate(['payments'])
    }
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
    
    }
  }
  