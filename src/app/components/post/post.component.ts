import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any = {}

  constructor(
    private route: ActivatedRoute,
    private postService: PostServiceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postService.getById(params.id)
        .subscribe((post) => {
          this.post = post
        })
    })
  }

 

}