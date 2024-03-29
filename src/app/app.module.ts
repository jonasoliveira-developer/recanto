import { LoaderInterceptorProvider } from './services/interceptor.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ResidentListComponent } from './pages/resident/resident.list/resident.list.component';
import { ResidentCreateComponent } from './pages/resident/resident.create/resident.create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'



import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { EmployeeListComponent } from './pages/employee/employee.list/employee.list.component';
import { LoginComponent } from './shared/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { FooterComponent } from './shared/footer/footer.component';
import { EmpoloyeeCreateComponent } from './pages/employee/empoloyee.create/empoloyee.create.component';
import { NgxMaskModule } from 'ngx-mask';
import { EmpoloyeeUpdateComponent } from './pages/employee/empoloyee.update/empoloyee.update.component';
import { EmpoloyeeDeleteComponent } from './pages/employee/empoloyee.delete/empoloyee.delete.component';
import { ResidentUpdateComponent } from './pages/resident/resident.update/resident.update.component';
import { ResidentDeleteComponent } from './pages/resident/resident.delete/resident.delete.component';
import { PaymentListComponent } from './pages/payment/payment.list/payment.list.component';
import { PaymentCreateComponent } from './pages/payment/payment.create/payment.create.component';
import { PaymentUpdadeComponent } from './pages/payment/payment.updade/payment.updade.component';
import { PaymentReadComponent } from './pages/payment/payment.read/payment.read.component';
import { AnnoucementsListComponent } from './pages/annoucements/annoucements.list/annoucements.list.component';
import { AnnoucementsCreateComponent } from './pages/annoucements/annoucements.create/annoucements.create.component';
import { AnnoucementsUpdateComponent } from './pages/annoucements/annoucements.update/annoucements.update.component';
import { AnnoucementsDeleteComponent } from './pages/annoucements/annoucements.delete/annoucements.delete.component';
import { OccurrenceListComponent } from './pages/occurrence/occurrence.list/occurrence.list.component';
import { OccurrenceCreateComponent } from './pages/occurrence/occurrence.create/occurrence.create.component';
import { OccurrenceUpdateComponent } from './pages/occurrence/occurrence.update/occurrence.update.component';
import { OccurrenceReadComponent } from './pages/occurrence/occurrence.read/occurrence.read.component';
import { PaymentReportComponent } from './pages/payment/payment.report/payment.report.component';
import { ReservationListComponent } from './pages/reservation/reservation.list/reservation.list.component';
import { ReservationCreateComponent } from './pages/reservation/reservation.create/reservation.create.component';


import { MatNativeDateModule } from '@angular/material/core';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { ReservationUpdateComponent } from './pages/reservation/reservation.update/reservation.update.component';
import { ReservationDeleteComponent } from './pages/reservation/reservation.delete/reservation.delete.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './pages/user/user.component';
import { OccurrenceDeleteComponent } from './pages/occurrence/occurrence.delete/occurrence.delete.component';
import { ConciergeListComponent } from './pages/concierge/concierge.list/concierge.list.component';
import { ConciergeCreateComponent } from './pages/concierge/concierge.create/concierge.create.component';
import { ConciergeDeleteComponent } from './pages/concierge/concierge.delete/concierge.delete.component';
import { ConciergeReadComponent } from './pages/concierge/concierge.read/concierge.read.component';
import { ConciergeUpdateComponent } from './pages/concierge/concierge.update/concierge.update.component';
import { ResidentReadComponent } from './pages/resident/resident.read/resident.read.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    EmployeeListComponent,
    LoginComponent,
    FooterComponent,
    EmpoloyeeCreateComponent,
    EmpoloyeeUpdateComponent,
    EmpoloyeeDeleteComponent,
    ResidentCreateComponent,
    ResidentListComponent,
    ResidentUpdateComponent,
    ResidentDeleteComponent,
    PaymentListComponent,
    PaymentCreateComponent,
    PaymentUpdadeComponent,
    PaymentReadComponent,
    AnnoucementsListComponent,
    AnnoucementsCreateComponent,
    AnnoucementsUpdateComponent,
    AnnoucementsDeleteComponent,
    OccurrenceListComponent,
    OccurrenceCreateComponent,
    OccurrenceUpdateComponent,
    OccurrenceReadComponent,
    PaymentReportComponent,
    ReservationListComponent,
    ReservationCreateComponent,
    LocalDateTimePipe,
    ReservationUpdateComponent,
    ReservationDeleteComponent,
    UserComponent,
    OccurrenceDeleteComponent,
    ConciergeListComponent,
    ConciergeCreateComponent,
    ConciergeDeleteComponent,
    ConciergeReadComponent,
    ConciergeUpdateComponent,
    ResidentReadComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    ToastrModule.forRoot({timeOut:4000,closeButton:true, progressBar:true}),
    NgxMaskModule.forRoot(),
    MatNativeDateModule,
    FullCalendarModule,
    NgxPaginationModule,
    MatProgressSpinnerModule
    
    
    
  ],
  providers: [
    AuthInterceptorProvider,
    LoaderInterceptorProvider,
    LocalDateTimePipe, { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
