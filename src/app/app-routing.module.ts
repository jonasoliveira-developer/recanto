import { AuthGuard } from './auth/auth.guard';
import { NavComponent } from './shared/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { EmployeeListComponent } from './pages/employee/employee.list/employee.list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  {path:'', component: NavComponent,canActivate: [AuthGuard], children: [
    {path:'employees', component: EmployeeListComponent},
    {path: 'home', component: HomeComponent },
  ]},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
