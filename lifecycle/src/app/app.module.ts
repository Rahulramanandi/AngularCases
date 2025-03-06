
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
