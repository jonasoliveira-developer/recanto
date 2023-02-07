import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPayment } from './../../../models/payment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment.list',
  templateUrl: './payment.list.component.html',
  styleUrls: ['./payment.list.component.css']
})
export class PaymentListComponent implements OnInit{
 page:number = 0
  ELEMENT_DATA: IPayment[] = [];
  FILTERED_DATA: IPayment[] = [];
  
  
  displayedColumns: string[] = ['id', 'title', 'personName', 'value','situation', 'acctions'];
  dataSource = new MatTableDataSource<IPayment>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private service: PaymentService) {}


    ngOnInit(): void {
      this.findAll();
    }


    findAll(): void {
      this.service.findAll().subscribe(response => {
        this.ELEMENT_DATA = response;
        this.dataSource = new MatTableDataSource<IPayment>(response);
        this.dataSource.paginator = this.paginator;
        this.page = response.length
      })
     }

     situationReturn(situatin:any): string {
      return situatin == 0 ? 'ABERTO': 'ENCERRADO';
     }

     orderBySituation(situatin:any): void {
      let list: IPayment[] = [];
       this.ELEMENT_DATA.map(payment => {
          if(payment.situation == situatin) {
            list.push(payment)
          }
      })
      this.dataSource = new MatTableDataSource<IPayment>(list);
      this.dataSource.paginator = this.paginator;

     }
    

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
