import { Component, OnInit } from '@angular/core';
import { IAnnoucements } from 'src/app/models/annoucements';
import { AnnoucementsService } from 'src/app/services/annoucements.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  annoucements: IAnnoucements[] = [];
  


  constructor(  private annoucementsService: AnnoucementsService) {}

  ngOnInit(): void {
    this.findAllAnnoucements();
  }

  findAllAnnoucements():void {
    this.annoucementsService.findAll().subscribe(response => {
      this.annoucements = response;
    });
  }
 
}
