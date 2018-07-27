import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders  , HttpResponse} from '@angular/common/http';
import 'rxjs';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';

@Injectable()


export class AppService {

key:any = "poxqzh6nqn";
urlpnr : any ="https://api.railwayapi.com/v2/pnr-status/pnr";
urlTrainStatus:any="https://api.railwayapi.com/v2/live/train";
public trainRouteUrl:any='https://api.railwayapi.com/v2/route/train';

public now: Date = new Date();
date:String;
public trainNo:any;
public station : any
public journeyDate : Date = new Date();

constructor(private _http : HttpClient) {}

spotTrainStatus(trainNo , station , date1){
  this.trainNo=trainNo;
  this.station=station;
  this.journeyDate.setDate(date1.getDate());
  console.log(this.trainNo);
  console.log(this.station);
  console.log(this.journeyDate);
}

sendPnr(body : any) {
  return this._http.get(this.urlpnr+'/'+body+'/apikey/'+this.key+'/', {
     responseType : 'json',
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}


getTrainStations(body : any) {
  // this.date = this.now.getDate()+"-"+(this.now.getMonth()+1)+"-"+this.now.getFullYear();
  // return this._http.get(this.urlTrainStatus+'/'+body+'/date/'+this.date+'/apikey/'+this.key+'/', {
  //    responseType : 'json',
  //   headers:new HttpHeaders().append('Content-Type' , 'application/json')
  // });
  return this._http.get(this.trainRouteUrl+'/'+body+'/apikey/'+this.key+'/', {
     responseType : 'json',
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
});
}

getStatusDetails() {
  this.date = this.journeyDate.getDate()+"-"+(this.journeyDate.getMonth()+1)+"-"+this.journeyDate.getFullYear();
  return this._http.get(this.urlTrainStatus+'/'+this.trainNo+'/date/'+this.date+'/apikey/'+this.key+'/', {
     responseType : 'json',
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}


}
