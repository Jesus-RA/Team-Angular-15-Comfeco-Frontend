// Imports modules.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

// Imports routes.
import { AppRoutingModule } from './routes/app-routing.module';

// Imports main component.
import { AppComponent } from './bootstrap/app.component';

// Imports layouts.
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,

    // Routings
    AppRoutingModule,
    
    // Layouts.
    DefaultLayoutModule,

    // Forms.
    FormsModule,
    ReactiveFormsModule,

    // Http
    HttpClientModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
