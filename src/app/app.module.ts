import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AppRoutingModule } from "./app.routing";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignUpComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
