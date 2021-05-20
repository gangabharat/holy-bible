import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleService } from '../../service/bible.service';
import { Bible,Book,Chapter } from '../bible';

@Component({
  selector: 'app-bible-book',
  templateUrl: './bible-book.component.html',
  styleUrls: ['./bible-book.component.css']
})
export class BibleBookComponent implements OnInit {

  data : Bible;
  resData : Book;
  bibleChapters : number;
  bibleBook : number = 0;
  constructor(private bibleService : BibleService,private route : ActivatedRoute) {
    this.route.params.subscribe(
      res=>{
        this.bibleBook = res.book;
      }
    );
   }

  ngOnInit(): void {   
    
    this.bibleService.getBible().subscribe(
      (res : Bible) =>{
      this.resData=res.Book[this.bibleBook];    
     }
    );
  }


}
