
import { Component, OnInit ,ElementRef } from '@angular/core';
import {FormGroup , FormControl , Validators , ReactiveFormsModule,
  NG_VALIDATORS,  FormsModule , ValidatorFn,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import { debounceTime } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


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

trainBetweenStationForm : FormGroup=new FormGroup({
      sourceStation: new FormControl(null ,  Validators.required),
       destinationStation: new FormControl(null , Validators.required)
});

trainForm : FormGroup=new FormGroup({
      train: new FormControl(null ,  [Validators.required,Validators.minLength(5) , Validators.maxLength(5)])
});


trainDetails:any;
trainStation: any;
route:any;
trainToBeChecked:any;
event:any;
trainNo : any;
sourceArr : any = [];
filterList:any;
destinationArr : any = [];
showsourcelist:boolean =false;
showdestinationlist:boolean=false;
showRest:boolean=false;
sourceStationCode:any;
destinationStationCode:any;
public date: Date = new Date();


  constructor(private _router : Router , private _appService : AppService) {
 }

  ngOnInit() {
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

      sendTrain() {
        if(!(this.trainForm.valid)) {
          console.log('invalid'); return;

        }
            console.log(this.trainForm.value.train);
            console.log(JSON.stringify( typeof this.trainForm.value.train));
            var num : number = parseInt(this.trainForm.value.train);
                this._router.navigate(['/trainschedule',num] );
      }

      searchTrainBetweenStation() {
        if(!(this.trainBetweenStationForm.valid)) {
          console.log('invalid'); return;

        }
            console.log(this.trainBetweenStationForm.value);
      }



      onSubmit() {
    console.log(this.pnrform)
    this.pnrform.controls['pnrNumber'].markAsTouched()
}
onSubmitTrain() {
console.log(this.trainForm)
this.trainForm.controls['train'].markAsTouched()
}
onSubmitTrainStation(){
  console.log(this.trainBetweenStationForm)
  this.trainBetweenStationForm.controls['sourceStation'].markAsTouched(),
    this.trainBetweenStationForm.controls['destinationStation'].markAsTouched()
}

enter(event) {
  if(event.target.value.length == 5)
  {
    this.showRest=true;
    this.trainNo = event.target.value;
    console.log(parseInt(event.target.value));
    this._appService.getTrainStations(parseInt(event.target.value)).
    subscribe(
      data=> {
        // this.trainDetails=data;
        // console.log(this.trainDetails.route);
        //   console.log(data);
        // console.log(data);
        this.trainStation = data;
        this.route=this.trainStation.route;
        console.log(this.route)
      },
       error=>console.log(error));
       console.log(this.showRest);
     }
  // console.log("value is",typeof parseInt(event.target.value));
  // console.log("length is" , event.target.value.length);
}

// checkForCode(event) {
//   console.log(event.target.value);
//
// }


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

// filter(event){
//   console.log(event.target.value);
//   if(event.target.value.length > 5) {
//
// this._appService.checkForStations(event.target.value).
// subscribe(
//   data =>{
//
//     this.filterList=data;
//     this.sourceArr=this.filterList.stations;
//     console.log(this.sourceArr);
//   },
//     err=>console.log(err));
//     this.showlist=true;
//     console.log(this.showlist);
//
// }
// else {
//   this.showlist=false;
//
// }
// }


// filter() {
//     if (this.query !== ""){
//         this.filteredList = this.countries.filter(function(el){
//             return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
//         }.bind(this));
//     }else{
//         this.filteredList = [];
//     }
// }

// select(item){
//     this.query = item;
//     this.filteredList = [];
// }

getSourceList(event){
    console.log(event.target.value);
    if(event.target.value.length > 5){
        // this.showsourcelist=true;
        console.log("inside if");
        this._appService.checkForStations(event.target.value).
          subscribe(
                data =>{
                  console.log('komal',data);
                  console.log('sourceArr', this.sourceArr)
                  this.filterList=data;
                  this.sourceArr=this.filterList.stations;
                  console.log(this.sourceArr);
                },
                  err=>console.log(err)
              );
          this.showsourcelist=true;
          console.log(this.showsourcelist);
    }
    else {
      this.showsourcelist=false;
      console.log(this.showsourcelist)
    }
}

getDestinationList(event) {

  if(event.target.value.length > 5){
  // this.showdestinationlist=true;
  this._appService.checkForStations(event.target.value).
  subscribe(
    data =>{
      this.filterList=data;
      this.destinationArr=this.filterList.stations;
      console.log('a',this.destinationArr);
    },
      err=>console.log(err));
      this.showdestinationlist=true;
      console.log('b',this.showdestinationlist);
  }
  else {
    this.showdestinationlist=false;
    console.log(this.showdestinationlist)
  }

}


selectSourceStation(stationname , stationcode) {
  this.trainBetweenStationForm.patchValue({"sourceStation" : stationname});
  console.log(stationcode);
  this.showsourcelist=false;
  this.sourceStationCode=stationcode;
      console.log(this.trainBetweenStationForm.value);
}


selectDestinationStation(stationname , stationcode) {
  this.trainBetweenStationForm.patchValue({"destinationStation" : stationname});
  console.log(stationcode);
  this.destinationStationCode=stationcode;
  // this._appService.sendToDestination(stationcode);
  this.showdestinationlist=false;
      console.log(this.trainBetweenStationForm.value);
}
searchTrainBetweenStations() {
  // this._appService.sendStationValues(this.sourceStationCode , this.destinationStationCode);
  this._router.navigate(['/betweenstations' , this.sourceStationCode , this.destinationStationCode]);
}
}
