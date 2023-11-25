import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ContentTwoComponent } from './content-two/content-two.component';
import { UserDataComponent } from './user-data/user-data.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'header', component: HeaderComponent },
      { path: 'side-nav', component: SideNavComponent },
      { path: 'reactive-form', component: ContentComponent },
      { path: 'template-driven-form', component: ContentTwoComponent },
      {path:'user',component:UserDataComponent},
      {path:'chart',component:GoogleChartComponent},
      {path:'dynamic-form',component:DynamicFormComponent}

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
