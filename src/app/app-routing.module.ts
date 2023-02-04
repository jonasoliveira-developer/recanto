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



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  {path:'', component: NavComponent,canActivate: [AuthGuard], children: [
    {path: 'home', component: HomeComponent },
    {path:'employees', component: EmployeeListComponent},
    {path:'employees/create', component: EmpoloyeeCreateComponent},
    {path:'employees/update/:id', component: EmpoloyeeUpdateComponent},
    {path:'employees/delete/:id', component: EmpoloyeeDeleteComponent},
    

    {path:'residents', component: ResidentListComponent},
    {path:'residents/create', component: ResidentCreateComponent},
    {path:'residents/update/:id', component: ResidentUpdateComponent},
    {path:'residents/delete/:id', component: ResidentDeleteComponent},
   
  ]},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
