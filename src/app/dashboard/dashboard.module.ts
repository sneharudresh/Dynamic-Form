import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ContentTwoComponent } from './content-two/content-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataComponent } from './user-data/user-data.component';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    ContentComponent,
    HomeComponent,
    ContentTwoComponent,
    UserDataComponent,
    GoogleChartComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    MatTableModule ,
    MatFormFieldModule  ,
    MatInputModule,
    GoogleChartsModule
  ],
})
export class DashboardModule { }
