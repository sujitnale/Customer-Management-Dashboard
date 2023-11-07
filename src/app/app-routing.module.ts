import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerHistoryComponent } from './dashboard/customer-history/customer-history.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'customer-history', component: CustomerHistoryComponent },
  { path: 'customer-create/:id', loadChildren: () => import("./add-edit-customer/add-edit-customer.module").then(m => m.AddEditCustomerModule) },
  { path: 'customer-create', loadChildren: () => import("./add-edit-customer/add-edit-customer.module").then(m => m.AddEditCustomerModule) },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
