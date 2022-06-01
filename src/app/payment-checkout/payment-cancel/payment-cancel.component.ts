import { Component, OnInit } from '@angular/core';
  import { CommomVariable } from '../../positionClass';

@Component({
  selector: 'app-payment-cancel',
  templateUrl: './payment-cancel.component.html',
  styleUrls: ['./payment-cancel.component.scss']
})
export class PaymentCancelComponent implements OnInit {
  mail:any;
  whatsapp:any;
  phone:any;
  whatsapp_xdk:any;
  constructor() { 
    this.mail=CommomVariable.mail;
    this.phone=CommomVariable.phone;
    this.whatsapp=CommomVariable.whatsapp;
    this.whatsapp_xdk=CommomVariable.whatsapp_xdk;
  }

  ngOnInit(): void {
  }

}
