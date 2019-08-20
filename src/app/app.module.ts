import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { AddPostComponent } from './components/blog/add-post/add-post.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForumComponent } from './components/forum/forum.component';
import { SubscriberFormComponent } from './components/home/subscriber-form/subscriber-form.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    AddPostComponent,
    BlogComponent,
    AboutUsComponent,
    ForumComponent,
    SubscriberFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
