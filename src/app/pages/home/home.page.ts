import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CommonService } from 'src/app/shared/common/common.service';
import { DbService } from 'src/app/shared/db/db.service';
import { A2HS,SwService } from 'src/app/shared/sw/sw.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showBtn:boolean = false;
  pmt:any;
  a2hsRes:any;
  alreadyAdded:boolean = false;

  // addition
  num1:number;
  num2:number;
  result:number = 0;

  //
  AppName:string;
  PackageName:string;
  VersionCode:string|number;
  VersionNumber:string;

  constructor(private appVersion: AppVersion,private common:CommonService,private platform:Platform,private sw:SwService,private db:DbService) {
    // this.appVersion.getAppName().then(value => {
    //   this.AppName = value;
    // }).catch(err => {
    //   alert(err);
    // });
    // this.appVersion.getPackageName().then(value => {
    //   this.PackageName = value;
    // }).catch(err => {
    //   alert(err);
    // });
    // this.appVersion.getVersionCode().then(value => {
    //   this.VersionCode = value;
    // }).catch(err => {
    //   alert(err);
    // });
    // this.appVersion.getVersionNumber().then(value => {
    //   this.VersionNumber = value;
    // }).catch(err => {
    //   alert(err);
    // });
   }
  
  ngOnInit() {
  }
  ionViewWillEnter(){
    // if (this.platform.is('mobileweb')) {
    //       this.sw.a2hs$.subscribe((res)=>{
    //       console.log("a2hs in home page",res);
    //       this.a2hsRes = res;
    //       if(res){
    //         this.showBtn = res.showButton;
    //         this.pmt = res.promt;
    //         this.a2hsRes = res;
    //         this.alreadyAdded =  this.showBtn?false:true;
    //       }
    //    })
    // }
  } 
  // a2hs
  addToHome(){
    this.sw.addToHomeScreen(this.a2hsRes);
  }
  // submit
  submit(){
    console.log("numbers:",this.num1,this.num2);
    this.db.postNumberToDb(this.num1,this.num2).subscribe(res=>{
      this.result = res.results;
      console.log("after sum result",res);
    },err=>{
      console.log("error",err);
    })
  }
}
