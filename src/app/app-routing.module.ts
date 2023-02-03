import { EmpoloyeeCreateComponent } from './pages/employee/empoloyee.create/empoloyee.create.component';
import { AuthGuard } from './auth/auth.guard';
import { NavComponent } from './shared/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { EmployeeListComponent } from './pages/employee/employee.list/employee.list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { EmpoloyeeUpdateComponent } from './pages/employee/empoloyee.update/empoloyee.update.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  {path:'', component: NavComponent,canActivate: [AuthGuard], children: [
    {path:'employees', component: EmployeeListComponent},
    {path:'employees/create', component: EmpoloyeeCreateComponent},
    {path:'employees/update/:id', component: EmpoloyeeUpdateComponent},
    {path: 'home', component: HomeComponent },
  ]},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
