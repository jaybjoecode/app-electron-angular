import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/modules/blog-web/home/home.component';
import { BlogListComponent } from './home/components/blog-list/blog-list.component';
import { BlogCreateComponent } from './home/components/blog-create/blog-create.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'blog', component: BlogListComponent },
      { path: 'blog/create', component: BlogCreateComponent },
      { path: 'blog/detail/:id', component: BlogCreateComponent },
      { path: 'blog/edit/:id', component: BlogCreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogWebRoutingModule { }
