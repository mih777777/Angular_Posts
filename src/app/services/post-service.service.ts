import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


export interface Post {
  id?: string
  title: string
  text: string
  author: string
  date: Date
}


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  post: Post

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:3000/api/posts')
  }


  getById(id: string): Observable<Post>{
    return this.http.get<Post>(`http://localhost:3000/api/posts/${id}`)
  }

  

}
