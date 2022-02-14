import { Component, OnInit } from '@angular/core';
import { BlogWebService } from '../../../services/blog-web.service';
import { MessageService } from 'src/app/core/services/message.service';
import { IQueryParam } from '../../../interfaces/IQueryParam';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: any[];
  queryParam: IQueryParam;

  constructor(
    private blogWebService: BlogWebService,
    private message: MessageService
    ) { }

  ngOnInit(): void {
    this.queryParam = { search: ''};
    this.getBlogs();
  }

  getBlogs() {
    this.blogWebService.getBlogs(this.queryParam).subscribe( (data: any) => {
      this.blogs = data.docs;
    });
  }

  search(event: string) {
    this.queryParam.search = event;
    this.getBlogs();
  }

  delete(id: any) {
    this.blogWebService.deleteBlog(id).subscribe( (data: any) => {
      this.message.success('Deleted', 'The element was deleted');
      this.getBlogs();
    });
  }

}
