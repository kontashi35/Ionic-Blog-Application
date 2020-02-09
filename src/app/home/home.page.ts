import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { RouterModule, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showProgress =true; 
  blogs:any;


  constructor(private http: HttpClient,private dataService : DataService,private router: Router) {
    this.getBlogPost();
  }
  editBlog(selData) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: selData
      }
    };
    this.router.navigate(['add-blog'],navigationExtras);
  }
  ionViewDidEnter(){
    this.getBlogPost();
    
  }
  getBlogPost(){
    let data;
    this.dataService.getBlog().subscribe(res=>{
        this.showProgress=false;
        data=res;
        this.blogs=data.data;
    });
  }
  
}
