import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecentHistoryService } from 'src/app/service/recent-history.service';
import { BibleService } from '../../service/bible.service';
import { Bible,Book,Chapter, BibleVerse } from '../bible';

@Component({
  selector: 'app-bible-book-chapter',
  templateUrl: './bible-book-chapter.component.html',
  styleUrls: ['./bible-book-chapter.component.css']
})
export class BibleBookChapterComponent implements OnInit {

  data : Bible;
  resData : Chapter;
  bibleChapters : number = 0 ;
  bibleBook : number = 0;
  bibleVerse :  BibleVerse[] = [];
  //bibleVerse = [{Book : 1,Chapter : 1,Verse :0}];  
  //bibleVerse = [];

  constructor(private bibleService : BibleService,private route : ActivatedRoute,private recent : RecentHistoryService) {
    this.route.params.subscribe(
      res=>{
        this.bibleBook = res.book;
        this.bibleChapters = res.chapter;
        //console.log(res);
      }
    );
   }

  ngOnInit(): void {   
    
    this.bibleService.getBible().subscribe(
      (res : Bible) =>{
      this.resData=res.Book[this.bibleBook-1].Chapter[this.bibleChapters-1];          
     }
    );
    //this.bibleVerse = this.recent.dataBibleVerse;
    //this.bibleVerse.push({Book : this.bibleBook-1,Chapter : this.bibleChapters-1,Verse :0 });  
    //this.myObjArray = this.bibleVerse;
    this.recent.save({Book : this.bibleBook-1,Chapter : this.bibleChapters-1,Verse :0 }); 

    //console.log(this.bibleVerse);

  }
  addNew(){
    // this.myObjArray.push({Book : this.bibleBook-1,Chapter : this.bibleChapters-1,Verse :0 });  
    // this.recent.save(this.myObjArray); 
    // console.log(this.myObjArray);
  }

  books = [
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    '1 Samuel',
    '2 Samuel',
    '1 Kings',
    '2 Kings',
    '1 Chronicles',
    '2 Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalm',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habakkuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation'
];

}
