import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { postsComponent } from './components/blog/posts/posts.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForumComponent } from './components/forum/forum.component';
import { SubscriberFormComponent } from './components/home/subscriber-form/subscriber-form.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';

import { HttpErrorHandler }     from './services/http-error-handler.service';
import { MessageService }       from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    postsComponent,
    BlogComponent,
    AboutUsComponent,
    ForumComponent,
    SubscriberFormComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
