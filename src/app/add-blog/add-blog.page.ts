import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Blog } from '../domain/Blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.page.html',
  styleUrls: ['./add-blog.page.scss'],
})
export class AddBlogPage implements OnInit {
  blogForm :FormGroup;
  progress =false;
  data: any;
  blog: Blog;
  isEditPage = false;
  uploadBtn = 'Upload';
  toolbarTitle = 'Add Blog';

  constructor(private formBuilder: FormBuilder,private dataService:DataService,private router:Router,private route: ActivatedRoute,
    public toastController: ToastController) { 
   
      this.blogForm = new FormGroup({

        url: new FormControl(''),
        title: new FormControl(''),
        description: new FormControl('')

  });
  } 

  ngOnInit() {
   
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.blogForm = new FormGroup({
          id: new FormControl(this.data.id),
          url: new FormControl(this.data.url),
          title: new FormControl(this.data.title),
          description: new FormControl(this.data.description)
  
    });
    this.isEditPage=true;
    this.uploadBtn='Update';
    this.toolbarTitle='Edit Blog'
      }
    });
    
  }
  uploadBlog() {
    let da=this.blogForm.value;
    
    if(da.url!='' && da.title!='' && da.description!=''){
      if(this.uploadBtn=='Upload'){
        let data;
        this.progress=true;
        this.dataService.postBlog(this.blogForm.value).subscribe(res=>{
          data=res;
            if(data.status=='succcess'){
                this.presentToast(data.message);
                this.progress=false;
               this.router.navigate([''])
            }
        });
      }else{
        let data;
        this.progress=true;
        this.dataService.updateBlog(this.blogForm.value,this.blogForm.value.id).subscribe(res=>{
          data=res;
            if(data.status=='succcess'){
                this.presentToast(data.message);
                this.progress=false;
               this.router.navigate([''])
            }
        });
      }
     
    }else{
      this.presentToast("Please Enter every detail!")
    }
        
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  deleteBlog() {
    let da=this.blogForm.value;
    this.progress=true;
    let data;
    this.dataService.deleteBlog(this.blogForm.value.id).subscribe(res=>{
      data=res;
        if(data.status=='succcess'){
            this.presentToast(data.message);
            this.progress=false;
           this.router.navigate([''])
        }
    });
  }
}
