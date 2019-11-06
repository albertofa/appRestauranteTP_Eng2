import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
    selector: "Welcome",
    templateUrl: "./welcome.component.html"
})
export class WelcomeComponent implements OnInit {

    resultado:string;
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        
    }

    public onScan() {
        
        new BarcodeScanner().scan({
            formats: "QR_CODE, EAN_13",
            showFlipCameraButton: false,   
            preferFrontCamera: false,     
            showTorchButton: true,        
            beepOnScan: true,             
            torchOn: false,            
            resultDisplayDuration: 500,        
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then((result) => {
            this.resultado = result.text;
            alert({
                title: "You Scanned ",
                message: "Format: " + result.format + ",\nContent: " + result.text,
                okButtonText: "OK"
            });
            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }
}
