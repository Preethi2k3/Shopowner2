import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopownerService {
  API="http://localhost:4200";
  public registerShopowner(ShopownerData: any)
  {
    return this.http.post(this.API + '/registerShopowner' , ShopownerData);
  }

  public getShopowners(){
    return this.http.get(this.API+'/getShopowner');
  }

  public deleteShopowner(S_id:any){
    return this.http.delete(this.API+'/deleteShopowner?S_id=' + S_id);
  }

  public updateShopowner(Shopowner: any){
    return this.http.put(this.API +'/updateShopowner', Shopowner);
  }
  constructor(private http: HttpClient) { }
}
