import { Component, OnInit } from '@angular/core';

import { post } from '../../../model/post';
import { postsService } from '../../../services/posts.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  providers: [postsService],
  styleUrls: ['./posts.component.css']
})
export class postsComponent implements OnInit {
  posts: post[];
  editPost: post; // the post currently being edited

  constructor(private postsService: postsService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts()
      .subscribe(posts => (this.posts = posts));
  }

  add(content: string): void {
    this.editPost = undefined;
    content = content.trim();
    if (!content) {
      return;
    }

    // The server will generate the id for this new post
    const newPost: post = { content } as post;
    this.postsService
      .addPost(newPost)
      .subscribe(post => this.posts.push(post));
  }

  delete(Post: post): void {
    this.posts = this.posts.filter(p => p !== Post);
    this.postsService
      .deletePost(Post.id)
      .subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.postsService.deletePost(Post.id);
    */
  }

  edit(Post: post) {
    this.editPost = Post;
  }

  search(searchTerm: string) {
    this.editPost = undefined;
    if (searchTerm) {
      this.postsService
        .searchPosts(searchTerm)
        .subscribe(posts => (this.posts = posts));
    }
  }

  update() {
    if (this.editPost) {
      this.postsService
        .updatePost(this.editPost)
        .subscribe(Post => {
        // replace the post in the posts list with update from server
        const ix = Post ? this.posts.findIndex(p => p.id === Post.id) : -1;
        if (ix > -1) {
          this.posts[ix] = Post;
        }
      });
      this.editPost = undefined;
    }
  }
}