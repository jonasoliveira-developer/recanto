import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IConcierge } from './../../../models/concierge';
import { ConciergeService } from './../../../services/concierge.service';

@Component({
  selector: 'app-concierge.update',
  templateUrl: './concierge.update.component.html',
  styleUrls: ['./concierge.update.component.css']
})
export class ConciergeUpdateComponent implements OnInit {

  verify:boolean = false;
  events = JSON.parse(localStorage.getItem('events'))
  term:boolean = false;


  concierge: IConcierge = {
    id:'',
    title:'',
    name:'',
    document:'',
    car:'',
    description:'',
    situation:'',
    person:'',
    dateOpen:'',
    dateFinish:'',
    personName:''


  }

  situation: FormControl = new FormControl(null, Validators.required);

  constructor( 
    private router: Router,
    private routes: ActivatedRoute,
    private service: ConciergeService,
    private toast: ToastrService
    ) {}

  ngOnInit(): void {
    this.concierge.id = this.routes.snapshot.paramMap.get('id');
    this.findById();
  }


  findById():void {
    this.service.findById(this.concierge.id).subscribe(response => {
      this.concierge = response;
    })
  }


  update():void {
    this.service.update(this.concierge).subscribe(response => {
      this.router.navigate(['concierges'])
      this.toast.success("Serviço criado com sucesso.");
      
}, ex => {
  this.toast.error(ex.error.error)
  
})


}

  
  returnSituation(mode:any): string {
    if(mode == '0') {
      return 'ABERTO'
    }else{
      return 'ENCERRADO'
    }
   }

      
   goBack():void {
    this.router.navigate(['concierges'])
  }

}
