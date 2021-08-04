import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SERVER_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient,private http1:HTTP) { }

  public GetItemsByCat(id){
    return this.http.get<any>(SERVER_URL+'MobileItems/getItemsByCategory/'+id)
  }
  public GetItemsById(id){
    return this.http.get<any>(SERVER_URL+'MobileItems/getItemsById/'+id)
  }
  public GetItemColor(id){
    return this.http.get<any>(SERVER_URL+'Other/ItemsColor/'+id)
  }
  public getColorCount(itemId,colorId){
    return this.http.get<any>(SERVER_URL+'Other/ColorCount/'+itemId+"/"+colorId)
  }
}
