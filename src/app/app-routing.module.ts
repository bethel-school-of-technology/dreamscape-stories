import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForumComponent } from './forum/forum.component';
import { AddPostComponent } from './add-post/add-post.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
