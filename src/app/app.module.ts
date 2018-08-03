import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ROUTING} from './app.routing';
import { PnrComponent } from './pnr/pnr.component';
import {AppService} from './app.service';
import { TrainStatusComponent } from './train-status/train-status.component';
import { TrainscheduleComponent } from './trainschedule/trainschedule.component';
import { BetweenstationsComponent } from './betweenstations/betweenstations.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PnrComponent,
    TrainStatusComponent,
    TrainscheduleComponent,
    BetweenstationsComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
