import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SERVER_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient,private http1:HTTP) { }

  public addOrder(order){
    return this.http.post<any>(SERVER_URL+'Order/addOrder',order)
  }
  public getLastOrders(clientId){
    return this.http.get<any>(SERVER_URL+'Order/clientLastOrders/'+clientId)
  }
}
