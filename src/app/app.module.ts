import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { APPRROUTES } from './app.routing';
import { PreloadSelectedModules } from './app.preload-strategy';

import { reducers } from './reducers/reducers';
import { AppComponent } from './app.component';


export function useDock() {
  return {
    monitor: useLogMonitor({
      visible: false,
      position: 'right'
    })
  };
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    RouterModule.forRoot(APPRROUTES, { preloadingStrategy: PreloadSelectedModules }),
    StoreModule.provideStore(reducers()),
    StoreDevtoolsModule.instrumentStore(useDock),
    StoreLogMonitorModule
  ],
  providers: [PreloadSelectedModules],
  bootstrap: [AppComponent]
})
export class AppModule { }
