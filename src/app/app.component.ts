import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//added for barcode
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

//added for hw back button
/*
import { PopoverController } from '@ionic/angular';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { MenuController, IonRouterOutlet } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes, Router, RouterOutlet } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';
import { NgModule, ViewChildren, QueryList } from '@angular/core';
*/

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  //added for barcode
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  //added for hw back button
  //lastTimeBackPress = 0;
  //timePeriodToExit = 2000;

  //@ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    //added below
    //barcode 
    private barcodeScanner: BarcodeScanner

    //hw back button
    /*
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router,
    private toast: Toast
    */
  ) {
    this.initializeApp();

    //added below
    //barcode
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    //hw back button
    //this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //barcode test
      this.encodeData = "https://www.FreakyJolly.com";
    });
  }

  //added below
  //barcode
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data ' + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }
 
  encodedText() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
      console.log(encodedData);
      this.encodeData = encodedData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }

  //hw back
/*
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      // close action sheet
      try {
        const element = await this.actionSheetCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
      }

      // close popover
      try {
        const element = await this.popoverCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
      }

      // close modal
      try {
        const element = await this.modalCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
        console.log(error);
      }

      // close side menua
      try {
        const element = await this.menu.getOpen();
        if (element !== null) {
          this.menu.close();
          return;
        }
      } catch (error) {
      }

      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url === '/home') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work in ionic 4
          } else {
          this.toast.show(
            `Press back again to exit App.`,
            '2000',
            'center')
            .subscribe(toast => {
              // console.log(JSON.stringify(toast));
            });
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }
  */
}
