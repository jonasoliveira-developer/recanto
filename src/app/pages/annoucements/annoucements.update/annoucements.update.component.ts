import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAnnoucements } from 'src/app/models/annoucements';
import { AnnoucementsService } from 'src/app/services/annoucements.service';

@Component({
  selector: 'app-annoucements.update',
  templateUrl: './annoucements.update.component.html',
  styleUrls: ['./annoucements.update.component.css']
})
export class AnnoucementsUpdateComponent implements OnInit{

  annoucement: IAnnoucements = {
    id:'',
    title:'',
    description:'',
    dateOpen:'',
    person:'',
    personName:'',
  
  }
  
  title: FormControl = new FormControl(null, Validators.required);
  person: FormControl = new FormControl(null, Validators.required);
  description: FormControl = new FormControl(null, Validators.required);

  
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
  
    update():void {
      this.service.update(this.annoucement).subscribe(respose => {
        this.router.navigate(['annoucements'])
        this.toast.success("Aviso  atualizado com sucesso!");
      }, ex => {
        if(ex.error.errors) {
          ex.error.errors.map(x => this.toast.error(x.message))
        }
        else {
          this.toast.error(ex.error.message)
        }
      })
    }
    
  
  
  
      fieldValidate(): boolean {
        return this.title.valid && 
               this.description.valid          
      }
      
      goBack():void {
        this.router.navigate(['annoucements'])
      }
  }
  