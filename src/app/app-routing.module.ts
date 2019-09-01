import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalcPayComponent } from './components/calc-pay/calc-pay.component';
import { CalcPayDayComponent } from './components/calc-pay-day/calc-pay-day.component';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calcpay', component: CalcPayComponent},
  {path: 'day', component: CalcPayDayComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
