import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { PuneComponent } from './pune/pune.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LComponent } from './pune/l/l.component';
import { MantriComponent } from './pune/mantri/mantri.component';
import { LeleComponent } from './pune/lele/lele.component';
import { DeepComponent } from './pune/deep/deep.component';
import { RahulComponent } from './pune/rahul/rahul.component';
import { ParamarComponent } from './pune/paramar/paramar.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';


const route:Routes=[
  {path:'mumbai',component:MumbaiComponent},
  {path:'pune',component:PuneComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'deep', component:DeepComponent},
  {path:'l',component:LComponent},
  {path:'lele',component:LeleComponent},
  {path:'mantri',component:MantriComponent},
  {path:'paramar',component:ParamarComponent},
  {path:'rahul',component:RahulComponent},
  {path:'admin',component:AdminComponent},
  {path:'edit',component:EditComponent}
  
]


@NgModule({
  declarations: [
    MumbaiComponent,
    PuneComponent,
    LoginComponent,
    RegistrationComponent,
    LComponent,
    MantriComponent,
    LeleComponent,
    DeepComponent,
    RahulComponent,
    ParamarComponent,
    AdminComponent,
    UserComponent,
    EditComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(route)]
  ]
})
export class CityModule { }
