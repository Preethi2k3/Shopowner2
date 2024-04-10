import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShopownerService } from './ShopownerService';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopowner-module';
  constructor(private ShopownerService: ShopownerService) {
    this.getShopownerDetails();
  }

  register(registerForm: NgForm) {
    this.ShopownerService.registerShopowner(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getShopownerDetails();

      }, (err: any) => {
        console.log(err);
      }
    );
  }

  getShopownerDetails() {
    this.ShopownerService.getShopowners().subscribe(
      (resp: any) => {
        console.log(resp);
        this.ShopownerDetails = resp;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  ShopownerDetails = null as any;

  deleteShopowner(Shopowner: any) {
    this.ShopownerService.deleteShopowner(Shopowner.sid).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getShopownerDetails();
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  ShopownerToUpdate = {
    S_id: "",
    S_name: "",
    S_dept: "",
    desig: "",
    city: ""
  };

  edit(Shopowner: any) {
    this.ShopownerToUpdate = Shopowner;
  }
  updateShopowner() {
    this.ShopownerService.updateShopowner(this.ShopownerToUpdate).subscribe(
      (resp: any) => {
        console.log(resp);
      }, (err: any) => {
        console.log(err);
      }
    );
  }

}
