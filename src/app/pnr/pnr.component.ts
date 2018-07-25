import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from '../app.service';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {

pnrDetails :any;
// pnrNo : number ;

  constructor(private route: ActivatedRoute ,  private _appService : AppService) {
    this.route.params.subscribe(params => {
      // console.log("value of pnrNo." , typeof (JSON.stringify(params['id'])));
      // console.log(parseInt(s));
        var pnrNo : number = parseInt(params['id']);
        console.log(typeof pnrNo);
        this._appService.sendPnr(pnrNo)
.subscribe(
  data=> {
    this.pnrDetails=data;
      console.log(data);},
   err=>console.log(err));

        });


  }

  ngOnInit() {
  }




}
