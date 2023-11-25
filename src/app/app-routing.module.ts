import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemnstrateDependecnyComponent } from './demnstrate-dependecny/demnstrate-dependecny.component';

const routes: Routes = [
  {path:'home',
loadChildren:()=>import('././dashboard/dashboard.module').then((m)=>m.DashboardModule)
},

  {path:'dependency',component:DemnstrateDependecnyComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
