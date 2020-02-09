import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AddBlogPage } from '../add-blog/add-blog.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'add-blog',
        component: AddBlogPage
      }
    ]),
    IonicStorageModule.forRoot()

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
