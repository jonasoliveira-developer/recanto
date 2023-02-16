import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IConcierge } from './../../../models/concierge';
import { ConciergeService } from './../../../services/concierge.service';

@Component({
  selector: 'app-concierge.read',
  templateUrl: './concierge.read.component.html',
  styleUrls: ['./concierge.read.component.css']
})
export class ConciergeReadComponent {
  
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
     
  goBack():void {
    this.router.navigate(['concierges'])
  }


  
  returnSituation(mode:any): string {
    if(mode == '0') {
      return 'ABERTO'
    }else{
      return 'ENCERRADO'
    }
   }

}
