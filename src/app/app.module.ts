import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SecondaryViewTopComponent } from './secondary-view-top/secondary-view-top.component';
import { SecondaryViewBottomComponent } from './secondary-view-bottom/secondary-view-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SecondaryViewTopComponent,
    SecondaryViewBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
