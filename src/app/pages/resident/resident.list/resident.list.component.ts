import { ResidentService } from '../../../services/resident.service'
import { IResident } from '../../../models/residents';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-resident.list',
  templateUrl: './resident.list.component.html',
  styleUrls: ['./resident.list.component.css']
})
export class ResidentListComponent implements OnInit {
role:string = ''
filter:any = ''
ELEMENT_DATA: IResident[] = [];
ELEMENT_FILTERED: IResident[] = [];

  displayedColumns: string[] = ['id', 'cpf', 'name', 'email', 'acctions'];
  dataSource = new MatTableDataSource<IResident>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: ResidentService) {}

 ngOnInit(): void {
  this.filter =  localStorage.getItem('id')
  this.role = localStorage.getItem('roles')
   this.findAll();
  
 }

 findAll(): void {
  this.service.findAll().subscribe(response => {
    this.ELEMENT_DATA = response
    this.dataSource = new MatTableDataSource<IResident>(response);
    this.dataSource.paginator = this.paginator;

    if(this.role.includes('ROLE_RESIDENT') 
    && !this.role.includes('ROLE_ADMIN')
    && !this.role.includes('ROLE_EMPLOYEE')) {
      this.filterByUser()
    }
    
  })
  
 }


 filterByUser() {
  let list: IResident[] = [];
    this.ELEMENT_DATA.map(resident => {
       if(resident.id == this.filter) {
         list.push(resident)
       }
  })
  this.ELEMENT_DATA = list;
  this.dataSource = new MatTableDataSource<IResident>(this.ELEMENT_DATA);
  this.dataSource.paginator = this.paginator;
  
 }

 showComponentByUser():boolean {
  if(this.role.includes('ROLE_RESIDENT') 
  && !this.role.includes('ROLE_ADMIN')
  && !this.role.includes('ROLE_EMPLOYEE')) {
    return false
  }

  else {
    return true
  }

  
 }
 


 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
