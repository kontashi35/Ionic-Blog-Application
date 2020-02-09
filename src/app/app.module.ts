import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { AddBlogPage } from './add-blog/add-blog.page';
import { HomePageModule } from './home/home.module';
import { AddBlogPageModule } from './add-blog/add-blog.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';





const routes: Routes = [
  {path:'',component:HomePage},
    {path:'addblog',component:AddBlogPage}
 ];
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), HomePageModule,AddBlogPageModule,FormsModule,ReactiveFormsModule ,
    AppRoutingModule,HttpClientModule,
  RouterModule.forRoot(routes)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
