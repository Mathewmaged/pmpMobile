import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SERVER_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient,private http1:HTTP) { }
  public GetSliderData(){
    return this.http.get<any>(SERVER_URL+'Home/GetSliderData')
  }
  public GetFocusCategories(){
    return this.http.get<any>(SERVER_URL+'Home/GetFocusCategories')
  }
  public GetFocusItems(){
    return this.http.get<any>(SERVER_URL+'Home/GetFocusItems')
  }
  public AllCategories(){
    return this.http.get<any>(SERVER_URL+'Other/AllCategories')
  }
}
