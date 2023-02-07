import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAnnoucements } from 'src/app/models/annoucements';
import { AnnoucementsService } from 'src/app/services/annoucements.service';

@Component({
  selector: 'app-annoucements.delete',
  templateUrl: './annoucements.delete.component.html',
  styleUrls: ['./annoucements.delete.component.css']
})
export class AnnoucementsDeleteComponent implements OnInit{


  annoucement: IAnnoucements = {
    id:'',
    title:'',
    description:'',
    dateOpen:'',
    person:'',
    personName:'',
  
  }
 

  
    constructor( 
      private service: AnnoucementsService,
      private toast: ToastrService,
      private router: Router,
      private routes: ActivatedRoute
      ) {}
  
    ngOnInit(): void {
      this.annoucement.id = this.routes.snapshot.paramMap.get('id');
      this.findById();
    }

    findById():void {
      this.service.findById(this.annoucement.id).subscribe(response => {
        this.annoucement = response;
        console.log(response)
      })

    }
    
    delete():void {
      this.service.delete(this.annoucement.id).subscribe(response => {
        this.router.navigate(['annoucements'])
        this.toast.success("Aviso deletado com sucesso!")
      }, ex => {
        this.toast.error(ex.error.error)
      })
    }

      goBack():void {
        this.router.navigate(['annoucements'])
      }
  }
  