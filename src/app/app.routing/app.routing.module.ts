import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { AppointmentComponent } from '../appointment/appointment.component';

const routes: Routes = [ 
  {path: '', component:AppointmentListComponent },
  {path: 'appointment', component:AppointmentComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
