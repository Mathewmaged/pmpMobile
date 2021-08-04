import { AddTocard } from './../Models/add-tocard';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { SERVER_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient,private http1:HTTP) { }

  public AddTocard(item){
    return this.http.post<any>(SERVER_URL+'Cart/AddToCart',item)
  }
  public getCartList(clientId){
    return this.http.get<any>(SERVER_URL+'Cart/GetListCart/'+ clientId)
  }
  public updateCartItem(item){
    return this.http.post<any>(SERVER_URL+'Cart/UpdateCartItem',item)
  }
  public removeCartItem(item){
    return this.http.post<any>(SERVER_URL+'Cart/RemoveCartItem',item)
  }
}
