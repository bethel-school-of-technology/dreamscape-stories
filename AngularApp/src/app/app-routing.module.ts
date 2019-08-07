import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { PopularpostsComponent } from './popularposts/popularposts.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "contactus", 
    component: ContactusComponent
  },
  {
    path: "popular", 
    component: PopularpostsComponent
  },
  {
    path: "sign-up", 
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
