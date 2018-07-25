import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ROUTING} from './app.routing';
import { PnrComponent } from './pnr/pnr.component';
import {AppService} from './app.service';
import { TrainStatusComponent } from './train-status/train-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PnrComponent,
    TrainStatusComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
