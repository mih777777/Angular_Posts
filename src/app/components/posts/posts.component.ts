import { Component, OnInit } from '@angular/core'
import { PostServiceService , Post} from 'src/app/services/post-service.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.fetchPosts()
  }

  fetchPosts() {
    this.postService.getAll()
      .subscribe((posts) => {
        this.posts = posts
      })
  }

}
