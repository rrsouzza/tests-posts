import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/utils/interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }
}
