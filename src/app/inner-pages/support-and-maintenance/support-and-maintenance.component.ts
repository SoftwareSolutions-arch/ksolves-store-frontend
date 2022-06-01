import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommomVariable } from '../../positionClass';

@Component({
  selector: 'app-support-and-maintenance',
  templateUrl: './support-and-maintenance.component.html',
  styleUrls: ['./support-and-maintenance.component.scss']
})
export class SupportAndMaintenanceComponent implements OnInit {
  mail:any;
  whatsapp:any;
  phone:any;
  whatsapp_xdk:any;
  
  constructor(public title: Title) { 
    this.mail=CommomVariable.mail;
    this.phone=CommomVariable.phone;
    this.whatsapp=CommomVariable.whatsapp;
    this.whatsapp_xdk=CommomVariable.whatsapp_xdk;
  }

  ngOnInit(): void {
    this.title.setTitle('Support-and-maintanince | Ksolves-store');
  }

}
