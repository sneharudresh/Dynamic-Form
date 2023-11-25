import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DemnstrateDependecnyComponent } from './demnstrate-dependecny/demnstrate-dependecny.component';
import { DependecyInjectionService } from './dependecy-injection.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemnstrateDependecnyComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatTableModule
  ],
  providers: [DependecyInjectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
