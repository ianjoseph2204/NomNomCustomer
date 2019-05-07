import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'app-generate-qr',
    templateUrl: './generate-qr.page.html',
    styleUrls: ['./generate-qr.page.scss'],
})
export class GenerateQrPage implements OnInit {

    options: BarcodeScannerOptions;
    encodText: string = '';
    encodedData: any = {};
    scannedData: any = {};

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private scanner: BarcodeScanner
    ) { 
    }

    ngOnInit() {
    }

    scan() {
        this.options = {
            prompt: 'Scan your barcode'
        };

        this.scanner.scan(this.options).then((data) => {
            this.scannedData = data;
        }), (err) => {
            console.log('Error: ', err);
        }
    }

    encode() {
        this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
            this.encodedData = data;
        }, (err) => {
            console.log('Error: ', err);
        })
    }
}
