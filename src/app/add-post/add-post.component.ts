import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor() { }
  posts = []
  ngOnInit() {
  }
  
  addPost(content) {
    let post = { "content": content.value };
    if (localStorage.getItem("posts")){
      this.posts = JSON.parse(localStorage.getItem("posts"))
    }
    this.posts.push(post)
    localStorage.setItem("posts",JSON.stringify(this.posts))
    content.value = "";
  }
}
