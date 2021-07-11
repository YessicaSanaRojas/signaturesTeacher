import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/Component/home/home.component';
import { DataComponent } from '../app/Component/data/data.component';
import { ContactComponent } from './Component/contact/contact.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'contact', component : ContactComponent },
  { path : 'data', component : DataComponent },
  { path : '**', pathMatch : 'full', redirectTo : 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
