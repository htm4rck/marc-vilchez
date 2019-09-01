import { Component, OnInit } from '@angular/core';
class UtilDate {
   day: string;
   month: string;
  constructor() {
    const now = new Date();
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto',
      'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    this.day = now.getDate() <= 9 ? '0' + now.getDate() : now.getDate().toString();
    this.month = months[now.getMonth()];
  }
  getDay() {
    return this.day;
  }
  getMonth() {
    return this.month;
  }
}
class UtilDay {
   id: number;
   day: string;
   decimal: number;
   minutes: string;
  constructor(id, day, decimal, minutes) {
    this.id = id;
    this.day = day;
    this.decimal = decimal;
    this.minutes = minutes;
  }
}

@Component({
  selector: 'app-calc-pay',
  templateUrl: './calc-pay.component.html',
  styleUrls: ['./calc-pay.component.css']
})
export class CalcPayComponent implements OnInit {
  public title = 'Calculadora de Honorarios';
  dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
  arreglo = [];
  total = 0;
  minutes: number;
  hora;
  soles=0;
  solesSemanal=0;
  horas=8;
   day: string;
   mon: string;
  constructor() {
    let i = 0;
    this.dias.forEach(dia => {
      const a = new UtilDay(i, dia , 0 , '');
      this.arreglo.push(a);
      i++;
    });
    const now = new UtilDate();
    this.day = now.getDay();
    this.mon = now.getMonth();
  }
  outDecimal(n: number, i: number) {
    this.arreglo[i].decimal = n;
    this.total = 0;
    this.arreglo.forEach(a => {
      this.total += a.decimal;
    });
    this.total = parseFloat(this.total.toFixed(2));
    console.log(this.total);
  }
  outHora(n: number, i: number) {
    this.arreglo[i].minutes = n;
    this.minutes = 0;
    this.arreglo.forEach(a => {
      this.minutes += a.minutes;
    });
    // tslint:disable-next-line: radix
    let h = Math.trunc(this.minutes / 60);
    this.hora = h + ':' + ((this.minutes % 60) > 9 ? (this.minutes % 60) : '0' + (this.minutes % 60));
    console.log(this.minutes);
  }

  ngOnInit() {}

}
