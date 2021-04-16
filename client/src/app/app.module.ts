import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ModalModule} from "./modal/modal.module";
import {ModalService} from "./modal.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
