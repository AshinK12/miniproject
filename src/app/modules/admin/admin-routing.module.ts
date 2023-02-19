import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeanComponent } from 'src/app/mean/mean.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [ {path:'',component:AdminDashboardComponent,
 children:[ 
  { path:'home',component:MeanComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'', redirectTo: '/admin/home', pathMatch:'full'},
 ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }