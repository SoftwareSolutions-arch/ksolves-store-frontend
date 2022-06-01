import { Component, OnInit } from '@angular/core';
import { CommomVariable } from 'src/app/positionClass';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  cookies_section: boolean = false;
  mail:any;
  whatsapp:any;
  phone:any;
  whatsapp_xdk:any;

  constructor(public service: ServicesService) {
    this.cookiesShow();
    this.mail=CommomVariable.mail;
    this.phone=CommomVariable.phone;
    this.whatsapp=CommomVariable.whatsapp;
    this.whatsapp_xdk=CommomVariable.whatsapp_xdk;
  }

  ngOnInit(): void {
  }

  close_cookie() {
    this.cookies_section = true;
    localStorage.setItem('isCookiesSelected', 'true')
  }

  cookiesShow() {
    var data: any = localStorage.getItem('isCookiesSelected');
    if (data == "!true" || data == null) {
      this.cookies_section = false;
    }
    else {
      this.cookies_section = true;
    }
  }

  accept_cookies() {
    this.service.get4('ks_website_cookie_notice/ok').subscribe(result => {
      if(result.result=="ok"){
        localStorage.setItem('isCookiesSelected', 'true')
        this.cookies_section = true;
      }
    })
  }

}
