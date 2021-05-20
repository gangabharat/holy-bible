import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibleBookChapterComponent } from './bible-book-chapter/bible-book-chapter.component';
import { BibleBookComponent } from './bible-book/bible-book.component';

import { BibleComponent } from './bible.component';

const routes: Routes = [
  { path: '', component: BibleComponent },
  //{ path: ':id', component: BibleComponent }
  { path: ':book', component: BibleBookComponent },
  { path: ':book/:chapter', component: BibleBookChapterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibleRoutingModule { }
