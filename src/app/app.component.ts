import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';
import { CommonService } from './shared/common/common.service';
import { Platform } from '@ionic/angular';
import { A2HS, SwService } from './shared/sw/sw.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/Home', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  networkListener: PluginListenerHandle;
  netErrorHandler:boolean = false;
  netErrorMsg:string = null;
  networkStatus:any;
  // host listener for add to home screen
  deferredPrompt: any;
  showButton = false;
  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) { 
    //  console.log("add to home screen listener",e);
    //  e.preventDefault();
    //  this.deferredPrompt = e;
    //  this.showButton = true;
    //  let a2hs:A2HS = {promt:this.deferredPrompt,showButton:this.showButton};
    //  this.sw.a2hs.next(a2hs);
    //  this.sw.a2hs$.subscribe(res=>{console.log(res)})
  } 
  constructor(
    private commonService:CommonService,
    private platform:Platform,
    private sw:SwService
  ) {}
  ngOnInit(){
    console.log("is pwa",this.platform.is('pwa'))
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status;
      console.log('Network status changed', status);
      this.checkNetwork(true);
    });
   // network status
   this.getNetWorkStatus();
  }
  async getNetWorkStatus() {
    this.networkStatus = await Network.getStatus();
    console.log(this.networkStatus);
    this.checkNetwork(false);
  }

  endNetworkListener() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

  ngOnDestroy() {
   if (this.networkListener) {
     this.networkListener.remove();
    }
  }

     /** Network testing */
     checkNetwork(initCheck:boolean = false){
      console.log(initCheck,this.networkStatus.connected);
     if(this.networkStatus.connected){   
        this.toasterMessage("Your are in online","success");
      }else{
       this.netErrorHandler = true;
       this.netErrorMsg = "Please check your network connection currently you are in offline";
       this.toasterMessage(this.netErrorMsg,"error");
     }
    }
    /** Toaster message inject */
    toasterMessage(message:string,mode:"success"|"error"){
      this.commonService.presentToast(message,mode);
    }
}
