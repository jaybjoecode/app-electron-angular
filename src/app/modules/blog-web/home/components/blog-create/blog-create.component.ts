import { Component, OnInit } from '@angular/core';
import { BlogWebService } from '../../../services/blog-web.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  posts: any[];
  form: FormGroup;

  constructor(
    private blogWebService: BlogWebService,
    private message: MessageService,
    private fb: FormBuilder
    ) {

     }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      post: [null],
      description: [null]
    });
    this.getPosts();

    this.message.success('Welcome', 'Start to create element');
  }

  getPosts() {
    this.blogWebService.getPosts().subscribe( (data: any) => {
      this.posts = data.docs;
    });
  }

  save() {
    if (this.form.valid) {
      this.blogWebService.createBlog(this.form.value).subscribe( (data: any) => {
        this.message.success('Saved', 'The Element was saved');
      });
    }

  }

}
