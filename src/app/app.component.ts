import {
  Component
} from '@angular/core';

import {
  Platform
} from '@ionic/angular';
import {
  SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
  StatusBar
} from '@ionic-native/status-bar/ngx';

import {
  Intercom
} from "capacitor-intercom";
const intercom = new Intercom();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const registrationOptions = {
        userId: 'GBTrGjkpBIVQme8ZysKXIxC3ci43'
      }

      intercom.registerIdentifiedUser(registrationOptions)
        .then(() => {

          console.log('Intercom init success')
        })
        .catch(error => {

          console.log('Intercom init error: ', error)
        })

      intercom.displayLauncher()
        .then(() => {

          console.log('Intercom launcher display success')
        })
        .catch(error => {

          console.log('Intercom launcher display error: ', error)
        })
    });
  }
}