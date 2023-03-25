import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { PostService } from './services/post/post.service';
import { UserService } from './services/user/user.service';
import { CustomSubscriptionService } from './services/custom-subscription/custom-subscription.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PostService, UserService, CustomSubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
