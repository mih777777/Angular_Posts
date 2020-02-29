import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { 
    path: 'main', component: MainLayoutComponent, children: [
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:id', component: PostComponent }
    ] 
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
