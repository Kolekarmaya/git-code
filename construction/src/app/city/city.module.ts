import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { PuneComponent } from './pune/pune.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route:Routes=[
  {path:'mumbai',component:MumbaiComponent},
  {path:'pune',component:PuneComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent}
]


@NgModule({
  declarations: [
    MumbaiComponent,
    PuneComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(route)]
  ]
})
export class CityModule { }
