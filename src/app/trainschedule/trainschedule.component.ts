import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from '../app.service';

@Component({
  selector: 'app-trainschedule',
  templateUrl: './trainschedule.component.html',
  styleUrls: ['./trainschedule.component.css']
})
export class TrainscheduleComponent implements OnInit {
trainScheduledDetails : any;
  constructor(private route: ActivatedRoute ,  private _appService : AppService) {

    this.route.params.subscribe(params => {
        var trainNo : number = parseInt(params['id']);
        console.log(typeof trainNo);
        this._appService.getTrainStations(trainNo)
  .subscribe(
  data=> {
    this.trainScheduledDetails=data;
      console.log(data);},
   err=>console.log(err));

        });
  }

  ngOnInit() {
  }

}
