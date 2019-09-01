import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { CalcPayComponent } from './components/calc-pay/calc-pay.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';
import { CalcPayDayComponent } from './components/calc-pay-day/calc-pay-day.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MenuHomeComponent,
    CalcPayComponent,
    FooterComponent,
    Error404Component,
    CalcPayDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularDateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
