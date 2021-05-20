import { Component, OnInit } from '@angular/core';
import { RecentHistoryService } from 'src/app/service/recent-history.service';
import { BibleVerse } from '../bible';

@Component({
  selector: 'app-bible-recent-history',
  templateUrl: './bible-recent-history.component.html',
  styleUrls: ['./bible-recent-history.component.css']
})
export class BibleRecentHistoryComponent implements OnInit {

  bibleVerse : BibleVerse[] = [];
  constructor(private recentHistoryService : RecentHistoryService) { }

  ngOnInit(): void {
    this.recentHistoryService.dataBibleVerse.subscribe(
      (res : BibleVerse[])=>{
        this.bibleVerse=res;
      }
    );
  }

}
