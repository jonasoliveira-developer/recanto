import { EmployeeService } from './../../../services/employee.service';
import { IEmployee } from './../../../models/employee';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee.list',
  templateUrl: './employee.list.component.html',
  styleUrls: ['./employee.list.component.css']
})
export class EmployeeListComponent implements OnInit {
  filter:any = ''
  role:string = ''
  ELEMENT_DATA: IEmployee[] = [];

  displayedColumns: string[] = ['id', 'cpf', 'name', 'email', 'acctions'];
  dataSource = new MatTableDataSource<IEmployee>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: EmployeeService) {}

 ngOnInit(): void {
  this.filter =  localStorage.getItem('id')
  this.role = localStorage.getItem('roles')
   this.findAll();
 }

 findAll(): void {
  this.service.findAll().subscribe(response => {
    this.ELEMENT_DATA = response;
    this.dataSource = new MatTableDataSource<IEmployee>(response);
    this.dataSource.paginator = this.paginator;

    if( !this.role.includes('ROLE_ADMIN')) {
      this.filterByUser()
    } 
  })

 }

 filterByUser() {
  let list: IEmployee[] = [];
    this.ELEMENT_DATA.map(employee => {
       if(employee.id == this.filter) {
         list.push(employee)
       }
  })

  this.ELEMENT_DATA = list;
  this.dataSource = new MatTableDataSource<IEmployee>(this.ELEMENT_DATA);
  this.dataSource.paginator = this.paginator;

}

showComponentByUser():boolean {
  if( !this.role.includes('ROLE_ADMIN') ) {
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
