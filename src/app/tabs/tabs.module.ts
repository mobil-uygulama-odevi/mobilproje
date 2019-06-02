import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import {NewsPageModule} from '../news/news.module';
import {NewItemPageModule} from '../new-item/new-item.module';
import {UpdateItemPageModule} from '../update-item/update-item.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    NewsPageModule,
    NewItemPageModule,
    UpdateItemPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
