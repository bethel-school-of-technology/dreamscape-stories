import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForumComponent } from './forum/forum.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
