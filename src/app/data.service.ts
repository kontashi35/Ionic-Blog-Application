import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://bloappapi.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getSomeDta(){
    let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Accept', 'application/json');
      return this.http.get('https://api.myjson.com/bins/vt84m',{ headers: headers});
  }
  getBlog() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.baseUrl+'blog/get',{ headers: headers});
  }
  postBlog(body) {
    console.log(body);
    
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.post(this.baseUrl+'blog/save',body,{ headers: headers});
  }
  updateBlog(body,id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.put(this.baseUrl+'blog/update/'+id,body,{ headers: headers});
  }
  deleteBlog(id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.delete(this.baseUrl+'/blog/delete/'+id,{ headers: headers});
  }
}
