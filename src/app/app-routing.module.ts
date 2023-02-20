import { ConciergeUpdateComponent } from './pages/concierge/concierge.update/concierge.update.component';
import { ConciergeReadComponent } from './pages/concierge/concierge.read/concierge.read.component';
import { ConciergeDeleteComponent } from './pages/concierge/concierge.delete/concierge.delete.component';
import { OccurrenceDeleteComponent } from './pages/occurrence/occurrence.delete/occurrence.delete.component';
import { UserComponent } from './pages/user/user.component';
import { ReservationDeleteComponent } from './pages/reservation/reservation.delete/reservation.delete.component';
import { ReservationUpdateComponent } from './pages/reservation/reservation.update/reservation.update.component';
import { ReservationCreateComponent } from './pages/reservation/reservation.create/reservation.create.component';
import { ReservationListComponent } from './pages/reservation/reservation.list/reservation.list.component';
import { PaymentReportComponent } from './pages/payment/payment.report/payment.report.component';
import { OccurrenceReadComponent } from './pages/occurrence/occurrence.read/occurrence.read.component';
import { OccurrenceCreateComponent } from './pages/occurrence/occurrence.create/occurrence.create.component';
import { AnnoucementsDeleteComponent } from './pages/annoucements/annoucements.delete/annoucements.delete.component';
import { AnnoucementsCreateComponent } from './pages/annoucements/annoucements.create/annoucements.create.component';
import { PaymentReadComponent } from './pages/payment/payment.read/payment.read.component';
import { PaymentUpdadeComponent } from './pages/payment/payment.updade/payment.updade.component';
import { PaymentCreateComponent } from './pages/payment/payment.create/payment.create.component';
import { EmployeeListComponent } from './pages/employee/employee.list/employee.list.component';
import { EmpoloyeeUpdateComponent } from './pages/employee/empoloyee.update/empoloyee.update.component';
import { EmpoloyeeDeleteComponent } from './pages/employee/empoloyee.delete/empoloyee.delete.component';
import { EmpoloyeeCreateComponent } from './pages/employee/empoloyee.create/empoloyee.create.component';


import { ResidentDeleteComponent } from './pages/resident/resident.delete/resident.delete.component';
import { ResidentCreateComponent } from './pages/resident/resident.create/resident.create.component';
import { ResidentUpdateComponent } from './pages/resident/resident.update/resident.update.component';
import { ResidentListComponent } from './pages/resident/resident.list/resident.list.component';

import { AuthGuard } from './auth/auth.guard';
import { NavComponent } from './shared/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { PaymentListComponent } from './pages/payment/payment.list/payment.list.component';
import { AnnoucementsListComponent } from './pages/annoucements/annoucements.list/annoucements.list.component';
import { AnnoucementsUpdateComponent } from './pages/annoucements/annoucements.update/annoucements.update.component';
import { OccurrenceListComponent } from './pages/occurrence/occurrence.list/occurrence.list.component';
import { OccurrenceUpdateComponent } from './pages/occurrence/occurrence.update/occurrence.update.component';
import { ConciergeListComponent } from './pages/concierge/concierge.list/concierge.list.component';
import { ConciergeCreateComponent } from './pages/concierge/concierge.create/concierge.create.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  {path:'', component: NavComponent,canActivate: [AuthGuard], children: [

    {path:'users', component: UserComponent},
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path:'employees', component: EmployeeListComponent},
    {path:'employees/create', component: EmpoloyeeCreateComponent},
    {path:'employees/update/:id', component: EmpoloyeeUpdateComponent},
    {path:'employees/delete/:id', component: EmpoloyeeDeleteComponent},
    

    {path:'residents', component: ResidentListComponent},
    {path:'residents/create', component: ResidentCreateComponent},
    {path:'residents/update/:id', component: ResidentUpdateComponent},
    {path:'residents/delete/:id', component: ResidentDeleteComponent},

    {path:'payments', component: PaymentListComponent},
    {path:'payments/report', component: PaymentReportComponent},
    {path:'payments/create', component: PaymentCreateComponent},
    {path:'payments/update/:id', component: PaymentUpdadeComponent},
    {path:'payments/read/:id', component: PaymentReadComponent},

    {path:'annoucements', component: AnnoucementsListComponent},
    {path:'annoucements/create', component: AnnoucementsCreateComponent},
    {path:'annoucements/update/:id', component: AnnoucementsUpdateComponent},
    {path:'annoucements/delete/:id', component: AnnoucementsDeleteComponent},

    {path: 'occurrences', component: OccurrenceListComponent},
    {path: 'occurrences/create', component: OccurrenceCreateComponent},
    {path: 'occurrences/update/:id', component: OccurrenceUpdateComponent},
    {path: 'occurrences/delete/:id', component: OccurrenceDeleteComponent},
    {path: 'occurrences/read/:id', component: OccurrenceReadComponent},

    {path: 'reservations', component: ReservationListComponent},
    {path: 'reservations/create', component: ReservationCreateComponent},
    {path: 'reservations/update/:id', component: ReservationUpdateComponent},
    {path: 'reservations/delete/:id', component: ReservationDeleteComponent},

    {path: 'concierges', component: ConciergeListComponent},
    {path: 'concierges/create', component: ConciergeCreateComponent},
    {path: 'concierges/update/:id', component: ConciergeUpdateComponent},
    {path: 'concierges/read/:id', component: ConciergeReadComponent},
    {path: 'concierges/delete/:id', component: ConciergeDeleteComponent},
   
   
  ]},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
