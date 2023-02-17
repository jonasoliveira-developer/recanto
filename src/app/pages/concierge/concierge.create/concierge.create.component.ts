import { IResident } from './../../../models/residents';
import { ResidentService } from './../../../services/resident.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IConcierge } from './../../../models/concierge';
import { ConciergeService } from './../../../services/concierge.service';

@Component({
  selector: 'app-concierge.create',
  templateUrl: './concierge.create.component.html',
  styleUrls: ['./concierge.create.component.css']
})


export class ConciergeCreateComponent implements OnInit {
  residents: IResident[] = [];
  FILTERD: IResident[] = []
  verify:boolean = false;
  term:boolean = false;
  role:string = ''
  filter:any = ''

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
  title: FormControl = new FormControl(null, Validators.required);
  name: FormControl = new FormControl(null, Validators.required);
  document: FormControl = new FormControl(null, Validators.required);
  car: FormControl = new FormControl(null, Validators.required);
  description: FormControl = new FormControl(null, Validators.required);
  resident: FormControl = new FormControl(null, Validators.required);


  constructor( 
    private router: Router,
    private residentService: ResidentService,
    private service: ConciergeService,
    private toast: ToastrService
    ) {}

  ngOnInit(): void {
    this.filter =  localStorage.getItem('id')
    this.role = localStorage.getItem('roles')
    this.findAllResidents();
  }

  findAllResidents():void {
    this.residentService.findAll().subscribe(response => {
      this.residents = response;
      this.FILTERD = response;

      if(this.role.includes('ROLE_RESIDENT') 
      && !this.role.includes('ROLE_ADMIN')
      && !this.role.includes('ROLE_EMPLOYEE')) {
        this.filterByUser()
      }
    })

    
   }

   
   filterByUser() {
    let list: IResident[] = [];
    this.residents.map(resident => {
         if(resident.id == this.filter) {
           list.push(resident)
         }
    })
    this.residents = list;    
  
   }

  create():void {
      this.service.create(this.concierge).subscribe(response => {
        this.router.navigate(['concierges'])
        this.toast.success("Serviço criado com sucesso.");
        
  }, ex => {
    this.toast.error(ex.error.error)
    
  })
  

  }

  residentFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.residents = this.FILTERD.filter(element =>{
      return element.name.toLowerCase().includes(filterValue.toLowerCase());
     })
     
  }

  
  fieldValidate(): boolean {
    return this.situation.valid && 
           this.title.valid && 
           this.name.valid &&
           this.document.valid &&
           this.car.valid &&
           this.description.valid

          
  }
  

}
