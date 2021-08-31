import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  { path:'About',component: AboutComponent},
  { path:'Form', component: FormComponent},
  { path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
