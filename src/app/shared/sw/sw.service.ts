import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

export interface A2HS{
 promt:any;
 showButton:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SwService {
  // add to home screen
  a2hs = new BehaviorSubject<A2HS|null>(null);
  a2hs$ = this.a2hs.asObservable();
  constructor( public toastController: ToastController,private updates: SwUpdate) {
    // this.updates.checkForUpdate().then(res=>{
    //   console.log("check for update result",res);
    // })
    // this.updates.activateUpdate().then(res=>{
    //   console.log("activated update",res);
    // })
    // this.updates.available.subscribe(event => {
    //   console.log('current version is', event.current);
    //   console.log('available version is', event.available);
    //   updates.activateUpdate().then(() => document.location.reload());
    // });
    // this.updates.activated.subscribe(event => {
    //   console.log('old version was', event.previous);
    //   console.log('new version is', event.current);
    // });
   }
    //============== [ A2HS ] ======================
    // pwa re-register
    addToHomeScreen(a2sh) {
      console.log("in add to home screen",a2sh);
      // hide our user interface that shows our A2HS button
      a2sh.showButton = false;
      // Show the prompt
      a2sh.promt.prompt();
      // Wait for the user to respond to the prompt
      a2sh.promt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          a2sh.promt = null;

          this.a2hs.next(a2sh);
        });
    }

    //============== [ update client ]==================
    updateClient(){
      if(!this.updates.isEnabled){
        console.log('Not Enable');
        return;
      }
      this.updates.available.subscribe((event)=>{
        console
      })
    }
}
