import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { NewsPage } from '../news/news.page';
import { HomePage } from '../home/home.page';
import { UpdateItemPage } from '../update-item/update-item.page';
import { NewItemPage } from '../new-item/new-item.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        outlet: 'news',
        component: NewsPage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(news:news)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
