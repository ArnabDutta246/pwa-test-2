import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';
import { CommonService } from './shared/common/common.service';
import { Platform } from '@ionic/angular';
import { A2HS, SwService } from './shared/sw/sw.service';

declare const navigator: any;  
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Editor', url: '/code-editor', icon: 'paper-plane' },
    { title: 'Codepan', url: '/codepan', icon: 'archive' },
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
  a2hs:A2HS;
  @HostListener('window:beforeinstallprompt', ['$event'])
 async onbeforeinstallprompt(e) { 


    // show add new buttons
     console.log("add to home screen listener",e);
     e.preventDefault();
     this.deferredPrompt = e;
     this.showButton = true;
     this.a2hs = {promt:this.deferredPrompt,showButton:this.showButton};
     await navigator.getInstalledRelatedApps().then(
      (res)=>{
        console.log("oninit inside promise then",res);
        if(res.length){
          let checkWebAppExist = res.filter(f=>f.platform == 'webapp');
          if(checkWebAppExist.length == 0){
            console.log("if is working",checkWebAppExist,res)
            this.showButton = true;
            this.a2hs = {promt:this.deferredPrompt,showButton:this.showButton};
              this.sw.a2hs.next(this.a2hs);
              this.sw.a2hs$.subscribe(res=>{console.log(res)})
          }else{
            console.log("else is working",checkWebAppExist,res)
          }
        }else{
          console.log("else outside is working")
          this.showButton = true;
          this.a2hs = {promt:this.deferredPrompt,showButton:this.showButton};
          this.sw.a2hs.next(this.a2hs);
          this.sw.a2hs$.subscribe(res=>{console.log(res)})
        }
      }
    ) 
    //      // check already installed
    // const listOfInstalledApps = await navigator.getInstalledRelatedApps();
    // console.log("for installed info",listOfInstalledApps);
    // for (const app of listOfInstalledApps) {
    //   // These fields are specified by the Web App Manifest spec.
    //   console.log('platform:', app.platform);
    //   console.log('url:', app.url);
    //   console.log('id:', app.id);
    
    //   // This field is provided by the UA.
    //   console.log('version:', app.version);
    // }
  } 
  constructor(
    private commonService:CommonService,
    private platform:Platform,
    private sw:SwService
  ) {}
  async ngOnInit(){
    await navigator.getInstalledRelatedApps().then(
      (res)=>{
        console.log("oninit inside promise then",res);
        if(res.length){
          let checkWebAppExist = listOfInstalledApps.filter(f=>f.platform == 'webapp');
          if(checkWebAppExist.length == 0){
            console.log("if is working",checkWebAppExist,listOfInstalledApps)
            this.showButton = true;
            this.a2hs = {promt:this.deferredPrompt,showButton:this.showButton};
              this.sw.a2hs.next(this.a2hs);
              this.sw.a2hs$.subscribe(res=>{console.log(res)})
          }else{
            console.log("else is working",checkWebAppExist,listOfInstalledApps)
          }
        }else{
          console.log("else outside is working")
          this.showButton = true;
          this.a2hs = {promt:this.deferredPrompt,showButton:this.showButton};
          this.sw.a2hs.next(this.a2hs);
          this.sw.a2hs$.subscribe(res=>{console.log(res)})
        }
      }
    ) 
  // check already installed
  const listOfInstalledApps =  navigator.getInstalledRelatedApps();
  console.log("for installed info oninit",listOfInstalledApps);
  let checkWebAppExist = listOfInstalledApps.filter(f=>f.platform == 'webapp');
  if(checkWebAppExist.length == 0){
    console.log("if is working",checkWebAppExist,listOfInstalledApps)
      this.sw.a2hs.next(this.a2hs);
      this.sw.a2hs$.subscribe(res=>{console.log(res)})
  }else{
    console.log("else is working",checkWebAppExist,listOfInstalledApps)
  }
  for (const app of listOfInstalledApps) {
    // These fields are specified by the Web App Manifest spec.
    console.log('platform:', app.platform);
    console.log('url:', app.url);
    console.log('id:', app.id);
    // This field is provided by the UA.
    console.log('version:', app.version);
  }
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
