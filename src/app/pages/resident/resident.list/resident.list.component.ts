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

  ELEMENT_DATA: IResident[] = [];

  displayedColumns: string[] = ['id', 'cpf', 'name', 'email', 'acctions'];
  dataSource = new MatTableDataSource<IResident>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: ResidentService) {}

 ngOnInit(): void {
   this.findAll();
 }

 findAll(): void {
  this.service.findAll().subscribe(response => {
    this.ELEMENT_DATA = response;
    this.dataSource = new MatTableDataSource<IResident>(response);
    this.dataSource.paginator = this.paginator;
  })
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
