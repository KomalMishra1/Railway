import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from '../app.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {

pnrDetails :any;
showMessage:boolean = false;
// pnrNo : number ;

  constructor(private route: ActivatedRoute ,  private _appService : AppService , private spinner: NgxSpinnerService) {
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 2000);
    this.route.params.subscribe(params => {
      // console.log("value of pnrNo." , typeof (JSON.stringify(params['id'])));
      // console.log(parseInt(s));
        var pnrNo : number = parseInt(params['id']);
        console.log(typeof pnrNo);
        this._appService.sendPnr(pnrNo)
.subscribe(
  data=> {
    this.pnrDetails=data;
    if(this.pnrDetails.response_code == 220 || this.pnrDetails.response_code == 221)  {
      this.showMessage=true;
    }
    else {
      this.showMessage=false;
    }
      console.log(data);},
   err=>console.log(err));

        });


  }

  ngOnInit() {

  }




}
