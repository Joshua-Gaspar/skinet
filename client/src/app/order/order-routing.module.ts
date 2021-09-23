import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrderComponent } from './order.component';


const routes: Routes = [
  {path: '', component: OrderComponent},
  {path: ':id', component: OrderDetailedComponent, data: {breadcrumb: {alias: 'OrderDetailed'}}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports:[
    RouterModule
  ]
})
export class OrderRoutingModule { }
