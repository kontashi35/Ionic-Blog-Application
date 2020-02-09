import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { AddBlogPageRoutingModule } from './add-blog-routing.module';

import { AddBlogPage } from './add-blog.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from '../home/home.page';
import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
  {path:'',component:HomePage},
    {path:'addblog',component:AddBlogPage}
 ];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBlogPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    IonicStorageModule.forRoot()

  ],
  declarations: [AddBlogPage]
})
export class AddBlogPageModule {}
