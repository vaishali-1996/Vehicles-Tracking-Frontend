import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserMasterComponent,
    UserListComponent
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
