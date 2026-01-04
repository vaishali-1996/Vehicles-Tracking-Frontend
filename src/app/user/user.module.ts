import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserMasterComponent } from './user-master/user-master.component';

@NgModule({
  declarations: [
    UserMasterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserMasterComponent
  ]
})
export class UserModule { }
