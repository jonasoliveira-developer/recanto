import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OccurrenceService } from 'src/app/services/occurrence.service';

import { IOccurrence } from './../../../models/occurences';

@Component({
  selector: 'app-occurrence.list',
  templateUrl: './occurrence.list.component.html',
  styleUrls: ['./occurrence.list.component.css']
})
export class OccurrenceListComponent implements OnInit {
  ELEMENT_DATA: IOccurrence[] = [];
  FILTERED_DATA: IOccurrence[] = [];
  
  
  displayedColumns: string[] = ['id', 'title', 'personName','situation', 'acctions'];
  dataSource = new MatTableDataSource<IOccurrence>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private service: OccurrenceService) {}


    ngOnInit(): void {
      this.findAll();
    }


    findAll(): void {
      this.service.findAll().subscribe(response => {
        this.ELEMENT_DATA = response;
        this.dataSource = new MatTableDataSource<IOccurrence>(response);
        this.dataSource.paginator = this.paginator;
      })
     }

     situationReturn(situatin:any): string {
      return situatin == 0 ? 'ABERTO': 'ENCERRADO';
     }

     orderBySituation(situatin:any): void {
      let list: IOccurrence[] = [];
       this.ELEMENT_DATA.map(occurrence => {
          if(occurrence.situation == situatin) {
            list.push(occurrence)
          }
      })
      this.dataSource = new MatTableDataSource<IOccurrence>(list);
      this.dataSource.paginator = this.paginator;

     }
    

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
