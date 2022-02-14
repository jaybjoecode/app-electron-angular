import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogWebRoutingModule } from './blog-web-routing.module';
import { HomeComponent } from 'src/app/modules/blog-web/home/home.component';
import { BlogListComponent } from './home/components/blog-list/blog-list.component';
import { BlogCreateComponent } from './home/components/blog-create/blog-create.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent, BlogListComponent, BlogCreateComponent],
  imports: [
    CommonModule,
    BlogWebRoutingModule,
    CoreModule,
  ]
})
export class BlogWebModule { }
