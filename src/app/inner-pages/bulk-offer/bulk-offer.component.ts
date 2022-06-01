import { Component, OnInit } from '@angular/core';
import { CommomVariable } from '../../positionClass';

@Component({
  selector: 'app-bulk-offer',
  templateUrl: './bulk-offer.component.html',
  styleUrls: ['./bulk-offer.component.scss']
})
export class BulkOfferComponent implements OnInit {
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
