import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForumComponent } from './components/forum/forum.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SubscriberFormComponent } from './components/subscriber-form/subscriber-form.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "about-us", 
    component: AboutUsComponent
  },
  {
    path: "sign-up", 
    component: SignUpComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "forum",
    component: ForumComponent
  },
  { 
    path: "add-post",
    component: AddPostComponent
  },
  { 
    path: "subscriber-form",
    component: SubscriberFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
