import {RouterModule , Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PnrComponent} from './pnr/pnr.component';
import {TrainStatusComponent} from './train-status/train-status.component';

export const AppRoutes : Routes =[
  {path : '' , component : HomeComponent},
   {path: 'pnr/:id', component: PnrComponent},
   {path: 'trainstatus', component: TrainStatusComponent}



];

export const ROUTING : ModuleWithProviders = RouterModule.forRoot(AppRoutes);