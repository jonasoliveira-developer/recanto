import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IConcierge } from './../../../models/concierge';
import { ConciergeService } from './../../../services/concierge.service';

@Component({
  selector: 'app-concierge.delete',
  templateUrl: './concierge.delete.component.html',
  styleUrls: ['./concierge.delete.component.css']
})
export class ConciergeDeleteComponent implements OnInit {

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


  delete():void {
      this.service.delete(this.concierge.id).subscribe(response => {
        this.router.navigate(['concierges'])
        this.toast.success("Serviço  deletado com sucesso.");
        
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