import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders  , HttpResponse} from '@angular/common/http';
import 'rxjs';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';

@Injectable()


export class AppService {

key:any = "cbfl3fk6i6";
urlpnr : any ="https://api.railwayapi.com/v2/pnr-status/pnr";
urlTrainStatus:any="https://api.railwayapi.com/v2/live/train";

public now: Date = new Date();
date:String;
public trainStatusDetails:any;
public station : any

constructor(private _http : HttpClient) {}

sendToLiveStatus(data , station){
  this.trainStatusDetails=data;
  this.station=station;
}

sendPnr(body : any) {
  return this._http.get(this.urlpnr+'/'+body+'/apikey/'+this.key+'/', {
     responseType : 'json',
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}


getTrainStatus(body : any) {
  this.date = this.now.getDate()+"-"+(this.now.getMonth()+1)+"-"+this.now.getFullYear();
  return this._http.get(this.urlTrainStatus+'/'+body+'/date/'+this.date+'/apikey/'+this.key+'/', {
     responseType : 'json',
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}
}
