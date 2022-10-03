import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { EventlogComponent } from './eventlog/eventlog.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicapiComponent } from './publicapi/publicapi.component';
import { LaunchpadapiComponent } from './launchpadapi/launchpadapi.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    SettingsComponent,
    LoginComponent,
    ToolboxComponent,
    EventlogComponent,
    PublicapiComponent,
    LaunchpadapiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
