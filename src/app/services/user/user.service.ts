import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/utils/interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users');
  }
}
