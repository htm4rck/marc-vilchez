import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

class UtilHour {
   idecimal;
   fdecimal;
   tdecimal;
   total;
   ihour;
   fhour;
   minutes;
  constructor(hinicial, hfinal) {
    this.ihour = moment(hinicial.hour + ':' + hinicial.minute, 'HH:mm');
    this.fhour = moment(hfinal.hour + ':' + hfinal.minute, 'HH:mm');
    this.minutes = this.fhour.diff(this.ihour, 'minutes');
    this.total = moment('00:00', 'HH:mm').add(this.minutes, 'minutes');
    this.idecimal = hinicial.hour + (hinicial.minute / (60));
    this.fdecimal = hfinal.hour + (hfinal.minute / (60));
    this.tdecimal = Math.round((this.fdecimal - this.idecimal) * 100) / 100;
  }
  getMinutes() {
    return this.minutes;
  }
  getTDecimal() {
    return this.tdecimal;
  }
  geTotal() {
    return this.total.format('HH:mm');
  }
}

@Component({
  selector: 'app-calc-pay-day',
  templateUrl: './calc-pay-day.component.html',
  styleUrls: ['./calc-pay-day.component.css']
})
export class CalcPayDayComponent implements OnInit {
  @Input() dia: string;
  @Output() tdecimalOut = new EventEmitter<number>();
  @Output() totalOut = new EventEmitter<number>();
  turno = false;
  mhi = {
    hour: 9,
    minute: 0
  };
  mhf = {
    hour: 13,
    minute: 0
  };
  thi = {
    hour: 14,
    minute: 0
  };
  thf = {
    hour: 14,
    minute: 0
  };
  tdecimalMorn = 0;
  totalMorn;
  tdecimalAfter = 0;
  totalAfter;
  tdecimal = 0;
  minutesMorn;
  minutesAfter;
  total;
  updateHour() {
    const hour = new UtilHour(this.mhi, this.mhf);
    this.mhf.hour > 0 ?
      this.tdecimalMorn = hour.getTDecimal() : this.tdecimalMorn = 0;
    this.totalMorn = hour.geTotal();
    this.minutesMorn = hour.getMinutes();
    const hourAfter = new UtilHour(this.thi, this.thf);
    this.thf.hour > 0 ?
      this.tdecimalAfter = hourAfter.getTDecimal() : this.tdecimalAfter = 0;
    this.totalAfter = hourAfter.geTotal();
    this.minutesAfter = hourAfter.getMinutes();
    this.tdecimal = this.tdecimalMorn + this.tdecimalAfter;
    this.total = moment('00:00', 'HH:mm').add(this.minutesAfter, 'minutes').add(this.minutesMorn, 'minutes');
    this.tdecimalOut.emit(this.tdecimal);
    this.totalOut.emit(this.minutesAfter + this.minutesMorn);
  }

  constructor() { }

  ngOnInit() {
    this.updateHour();
  }
  addTurno() {
    this.turno = !this.turno;
    this.turno === false ? (this.thi.hour = 14, this.thi.minute = 0, this.thf.hour = 14, this.thf.minute = 0 ) : this.turno = true;
    this.updateHour();
  }
}
