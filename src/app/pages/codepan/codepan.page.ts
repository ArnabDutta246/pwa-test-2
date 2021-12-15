import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-codepan',
  templateUrl: './codepan.page.html',
  styleUrls: ['./codepan.page.scss'],
})
export class CodepanPage implements OnInit {
  @ViewChild('code') iframe: ElementRef;
   html_code;
   css_code;
   js_code;
  constructor() { }

  ngOnInit() {
  }
  

  contentRewrite(){
    let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    doc.open();
    doc.write(this.html_code+"<style>"+this.css_code+"</style>"+"<script>" + this.js_code + "</script>");
    doc.close();
  }
}
