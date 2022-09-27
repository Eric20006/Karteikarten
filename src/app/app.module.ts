import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './_routes/main/main.component';
import { LoginComponent } from './_routes/login/login.component';
import { TextingComponent } from './_routes/texting/texting.component';
import { ErrorComponent } from './_routes/error/error.component';
import { FileComponent } from './_routes/file/file.component';
import { NavComponent } from './_routes/main/templates/nav/nav.component';
import { OverviewComponent } from './_routes/main/templates/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    TextingComponent,
    ErrorComponent,
    FileComponent,
    NavComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
