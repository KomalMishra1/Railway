
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
        pnrNumber: new FormControl(null ,  [Validators.required,Validators.minLength(10) , Validators.maxLength(10)]),
});

trainSpotform : FormGroup=new FormGroup({
      trainNumber: new FormControl(null ,  [Validators.required,Validators.minLength(5) , Validators.maxLength(5)]),
});

trainDetails:any;
trainToBeChecked:any;
event:any;
  constructor(private _router : Router , private _appService : AppService) {

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

enter(event) {
  if(event.target.value.length == 5)
  {
    console.log(typeof parseInt(event.target.value));
    this._appService.getTrainStatus(parseInt(event.target.value)).
    subscribe(
      data=> {
        this.trainDetails=data;
        console.log(this.trainDetails.route);
          console.log(data);},
       err=>console.log(err));
     }
  console.log("value is",typeof parseInt(event.target.value));
  console.log("length is" , event.target.value.length);
}

pushData(event) {
  this.event=event
    }

moveToTrainStatus(){
    this._appService.sendToLiveStatus(this.trainDetails , this.event);
  this._router.navigate(['/trainstatus']);
}

}
