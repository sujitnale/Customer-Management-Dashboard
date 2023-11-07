import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCustomerComponent } from './components/add-edit-customer/add-edit-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [ { path: '', component: AddEditCustomerComponent }]
@NgModule({
  declarations: [AddEditCustomerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class AddEditCustomerModule { }
