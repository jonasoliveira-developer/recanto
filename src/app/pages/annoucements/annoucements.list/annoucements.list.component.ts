import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { I } from '@fullcalendar/core/internal-common';
import { IAnnoucements } from 'src/app/models/annoucements';
import { AnnoucementsService } from 'src/app/services/annoucements.service';


@Component({
  selector: 'app-annoucements.list',
  templateUrl: './annoucements.list.component.html',
  styleUrls: ['./annoucements.list.component.css']
})
export class AnnoucementsListComponent implements OnInit{
  role:string = ''
  filter:any = '';
  

  
  ELEMENT_DATA: IAnnoucements[] = [];

  displayedColumns: string[] = ['id', 'title', 'person', 'date', 'acctions'];
  dataSource = new MatTableDataSource<IAnnoucements>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AnnoucementsService) {}


 ngOnInit(): void {
  this.filter =  localStorage.getItem('id')
  this.role = localStorage.getItem('roles')
   this.findAll();
 }

 findAll(): void {
  this.service.findAll().subscribe(response => {
    this.ELEMENT_DATA = response;
    this.dataSource = new MatTableDataSource<IAnnoucements>(response);
    this.dataSource.paginator = this.paginator;
  })
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
