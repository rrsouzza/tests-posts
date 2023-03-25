import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '**', redirectTo: '/posts' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: PostDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
