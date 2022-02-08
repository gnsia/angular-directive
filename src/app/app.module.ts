import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchExampleComponent,
    NgStyleExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
