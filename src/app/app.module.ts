import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { SharedModule } from './shared/shared.module';
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
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APPRROUTES, { preloadingStrategy: PreloadSelectedModules }),
    SharedModule,
    StoreModule.provideStore(reducers()),
    StoreDevtoolsModule.instrumentStore(useDock),
    StoreLogMonitorModule
  ],
  providers: [PreloadSelectedModules],
  bootstrap: [AppComponent]
})
export class AppModule { }
