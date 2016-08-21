import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { AppComponent } from './app.component';
import { WikiComponent }  from './wikipedia.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    {provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA }                // in-mem server data
  ],
  declarations: [
    AppComponent,
    WikiComponent
  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }






