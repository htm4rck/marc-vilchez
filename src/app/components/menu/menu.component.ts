import { Component, OnInit, Input } from '@angular/core';
class Clock{
   ahora;
   hour;
   min;
   sec;
   military;
  constructor(){
    this.ahora = new Date();
    let hour = this.ahora.getHours();
    this.min = this.ahora.getMinutes();
    this.sec = this.ahora.getSeconds();
    hour<=12?
      (this.military='AM',this.hour=hour):
      (this.military='PM',this.hour=hour-12);
    this.hour<=9?this.hour='0'+this.hour:null;
    this.min<=9?this.min='0'+this.min:null;
    this.sec<=9?this.sec='0'+this.sec:null;
    if(hour<=12){
      this.military='AM';
    }
  }
      getClock(){
        return this.hour+':'+this.min+':'+this.sec+' '+this.military;
      }
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() title: string;
   reloj:string;
  constructor() {}

  ngOnInit() {
    this.setearReloj();
  }
  setearReloj(){
    let r = new Clock();
    this.reloj=r.getClock();
    let clase=this;
    setTimeout(function () {
      clase.setearReloj();
    },1000);
    /*let ahora = new Date();
    let hour = ahora.getHours();
    let min = ahora.getMinutes();
    let sec = ahora.getSeconds();
    this.reloj=hour+':'+min+':'+sec;
    let clase=this;
    setTimeout(function () {
      clase.setearReloj();
    },1000);*/
  }
}
