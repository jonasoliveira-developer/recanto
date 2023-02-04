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
    ResidentDeleteComponent
    

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
    ToastrModule.forRoot({timeOut:4000,closeButton:true, progressBar:true}),
    NgxMaskModule.forRoot()
    
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
