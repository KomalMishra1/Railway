
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators , ReactiveFormsModule,
  NG_VALIDATORS,  FormsModule , ValidatorFn,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pnrform : FormGroup=new FormGroup({
        pnrNumber: new FormControl(null ,  [Validators.required,Validators.minLength(10) , Validators.maxLength(10)])
});

trainSpotform : FormGroup=new FormGroup({
      trainNumber: new FormControl(null ,  [Validators.required,Validators.minLength(5) , Validators.maxLength(5)])
});

trainScheduleForm : FormGroup=new FormGroup({
      trainNumber1: new FormControl(null , Validators.required)
});

trainDetails:any;
trainStation: any;
trainToBeChecked:any;
event:any;
trainNo : any;
public date: Date = new Date();

  constructor(private _router : Router , private _appService : AppService) {
    // this.date = new Date();
    //  this.date.setDate( this.date.getDate() + 3 );
    //  console.log(this.date);

 }

  ngOnInit() {
      console.log(this.trainSpotform.value.trainNumber);
  }
ngOnChanges(){
  console.log(this.trainSpotform.value.trainNumber);
}



      sendPnr() {
        if(!(this.pnrform.valid)) {
          console.log('invalid'); return;

        }
            console.log(this.pnrform.value.pnrNumber);
            console.log(JSON.stringify( typeof this.pnrform.value.pnrNumber));
            var num : number = parseInt(this.pnrform.value.pnrNumber);
            // console.log(typeof num);
    //         this._appService.sendPnr(JSON.stringify(num))
    // .subscribe(
    //   data=> {  console.log(data);},
    //    err=>console.log(err));
            this._router.navigate(['/pnr',num] );


      }
      onSubmit() {
    console.log(this.pnrform)
    this.pnrform.controls['pnrNumber'].markAsTouched()
}
onSubmitTrainNo(){
  console.log(this.trainSpotform)
  this.trainSpotform.controls['trainNumber'].markAsTouched()
}

onSubmitTrainNo1(){
  console.log(this.trainScheduleForm)
  this.trainScheduleForm.controls['trainNumber1'].markAsTouched()
}

enter(event) {
  if(event.target.value.length == 5)
  {
    this.trainNo = event.target.value;
    console.log(parseInt(event.target.value));
    this._appService.getTrainStations(parseInt(event.target.value)).
    subscribe(
      data=> {
        // this.trainDetails=data;
        // console.log(this.trainDetails.route);
        //   console.log(data);
        console.log(data);
        this.trainStation = data;
        console.log(this.trainStation.route)
      },
       error=>console.log(error));
     }
  // console.log("value is",typeof parseInt(event.target.value));
  // console.log("length is" , event.target.value.length);
}

pushData(event) {
  this.event=event
  console.log(event);
    }

    pushDate(event) {
      if(event == "Tomorrow") {

        var date1 : Date =new Date();
        date1.setDate(date1.getDate() + 1 );

        this.date.setDate(date1.getDate());
        console.log("tomorrow selected" , this.date);
        return date1;
      }
      else if(event == "Yesterday") {
        var date2 : Date =new Date();
          date2.setDate( date2.getDate() - 1 );
          this.date.setDate(date2.getDate());
        console.log("yesterday selected" , this.date);
        return date2;
      }
      else{
        var date3 : Date =new Date();
        this.date.setDate(date3.getDate());
      console.log(this.date);
      return this.date;
    }

    }

SpotTrainStatus(){
    this._appService.spotTrainStatus(this.trainNo , this.event , this.date);
  this._router.navigate(['/trainstatus']);
}

sendTrainNo() {
  // if(!(this.trainSchedule.valid)) {
  //   console.log('invalid'); return;
  //
  // }

      console.log(this.trainScheduleForm.value);
      // var num : number = parseInt((this.trainScheduleForm.value.trainNo));
      // console.log(num);
  // this._router.navigate(['/trainschedule' , num]);
}
sendTrain() {
  console.log(this.trainScheduleForm.value);
}
}
