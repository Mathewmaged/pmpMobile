import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SERVER_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  title:any;
  backbtn:any;
  setDir:any ='rtl'
  openMenuFromRight:any = 'end'
  constructor(private http:HttpClient,private http1:HTTP) { }
  public addClient(client){
    return this.http.post<any>(SERVER_URL+'Clients/AddClient',client)
  }
  public clientLogin(client){
    return this.http.post<any>(SERVER_URL+'Clients/clientLogin',client)
  }
}
