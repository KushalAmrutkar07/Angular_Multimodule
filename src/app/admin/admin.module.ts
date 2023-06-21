import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';



@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[ //explicitly aapn write kela
    AdminLoginComponent,
    AdminDetailsComponent
  ]
})
export class AdminModule { }
