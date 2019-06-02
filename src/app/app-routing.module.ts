import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-item', loadChildren: './new-item/new-item.module#NewItemPageModule' },
  { path: 'update-item/:id', loadChildren: './update-item/update-item.module#UpdateItemPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
