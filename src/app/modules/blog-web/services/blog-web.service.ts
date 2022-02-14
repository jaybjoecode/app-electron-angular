import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IQueryParam } from '../interfaces/IQueryParam';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BlogWebService {

  constructor(private http: HttpClient) { }

  getBlogs(query: IQueryParam): Observable<any> {
    if (isNullOrUndefined(query.search) || query.search === '') {
      return this.http.get<any>(`${environment.serverUrl}/blog?&`);
    } else {
      console.log(query);
      return this.http.get<any>(`${environment.serverUrl}/blog?&`, {params: {search: query.search} });
    }
  }

  createBlog(body: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/blog`, body);
  }

  getBlogById(id: any): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}/blog/${id}/`);
  }

  updateBlog(id: any, body: any): Observable<any> {
    return this.http.put<any>(`${environment.serverUrl}/blog/${id}/`, body);
  }

  deleteBlog(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.serverUrl}/blog/${id}/`);
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}/post`);
  }

  getExamples(): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}/blog`);
  }

}
