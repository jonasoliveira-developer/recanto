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
  ELEMENT_DATA: IEmployee[] = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<IEmployee>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  
}
  constructor() {}

 ngOnInit(): void {
   
 }
}
