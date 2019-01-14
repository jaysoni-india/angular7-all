import { BindingComponent } from './binding/binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BottonsComponent } from './bottons/bottons.component';
import { As2Component } from './as2/as2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BottonsComponent,
    As2Component,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
