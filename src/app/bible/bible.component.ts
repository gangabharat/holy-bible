import { Component, OnInit, Input, SimpleChange, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BibleStoreService } from '../service/bible-store.service';
import { BibleService } from '../service/bible.service';
import { Bible,Book,Chapter } from './bible';
import { interval } from 'rxjs';
import { NotificationService } from '../service/notification.service';
import { PushNotificationsService } from '../shared/push-notification.service';
import { AudioService } from '../shared/audio.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.css']
})
export class BibleComponent implements OnInit {

  faBookOpen = faCoffee;
  @ViewChild('form') form : NgForm;

  data : Bible;
  resData : any;
  //resData : Book;
  bibleChapters : Book;
  book : number = 0;
  chapter : number = 0;
  verses : number = 0;
  audioBible : string;

  audio: any;
  playerStatus : string;

  fileToPlay:string;

  selectedBook : string = "Genesis - ఆదికాండము";
  selectedChapter : number = 1;
  
  newListModalRef: BsModalRef;
  listOptionsModalRef: BsModalRef;
  deleteListModalRef: BsModalRef;
  itemDetailsModalRef: BsModalRef;

   
  constructor(private bibleService : BibleService,
    private bibleStoreService : BibleStoreService,
    private notificationService: NotificationService,
    private pushNotificationsService: PushNotificationsService,
    private audioService: AudioService,
    private modalService: BsModalService
    ) { 
      this.pushNotificationsService.requestPermission();          
    }

  ngOnInit(): void {   
    this.audioService.playerStatus.subscribe(res=>{
      //console.log(res);
      this.playerStatus = res;
    })
    this.bibleService.getBible().subscribe(
      (res : Bible) =>{
      this.data=res;

      this.bibleChapters = this.data.Book[this.book];
      console.log(this.bibleChapters);
      this.resData =this.data.Book[this.book]?.Chapter[this.chapter];
      //console.log(event.target[this.form.value.Book].innerHTML);
      this.loadBible(this.book,this.chapter);

      //this.onChangeEvent(this.form);  
      //this.loadBible(+this.form.value.Book,+this.form.value.Chapter);     
      
      //this.resData =this.data.Book[this.book]?.Chapter[this.chapter];
      //this.onChangeEvent({Form.Book:});
      // interval(1000 * 30 * 1).subscribe(
      //   res=>{
      //     //console.log("test");
      //     this.book = this.randomIntFromInterval(0,65);
      //     this.chapter = this.randomIntFromInterval(0,10);
      //     this.verses = this.randomIntFromInterval(0,10);
      //     if(this.data.Book[this.book]?.Chapter[this.chapter]?.Verse[this.verses]?.Verse){
      //       this.notificationService.success(`${this.books[this.book+1]} : ${this.chapter+1} : ${this.verses+1}`,this.data.Book[this.book].Chapter[this.chapter].Verse[this.verses].Verse);
      //       //this.pushNotificationsService.sendPushNotification("Praise the lord",this.data.Book[this.book].Chapter[this.chapter].Verse[this.verses].Verse);
           
      //     }
      //     else{
      //       console.log(`${this.books[this.book+1]} : ${this.chapter+1} : ${this.verses+1}`);          

      //     }
      //   },err =>{
      //     console.log("handling error");
      //   }
      // );

     }
    );
    

    // this.bibleStoreService.puppies$.subscribe(
    //   res => {
    //     console.log(res);
       
    //   }
    // );

    
    // setTimeout(() => {
     
    // }, 1000 * 5);

  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
 
  onSubmit(form : NgForm)
  {    
    this.onChangeEvent(form);
  }
  onDropDownChange(form : NgForm, event : any)
  {
    //this.bibleChapters = this.data.Book[+form.value.Book];
    //console.log(this.bibleChapters);
    this.bibleChapters = this.data.Book[+form.value.Book];
    //console.log(event.target[+form.value.Book].innerHTML);
    this.selectedBook = event.target[+form.value.Book].innerHTML;
    //form.path({})
    //this.form.value.patchValue({ Chapter : 10});
    this.selectedChapter =  1 ;
    this.loadBible(+form.value.Book,0);
  }
  onChangeEvent(form : NgForm)
  { 
    this.selectedChapter = +form.value.Chapter +1 ;
    this.loadBible(+form.value.Book,+form.value.Chapter);   
  }
  onPlayer()
  {
    this.audioService.toggleAudio();    
  }

  loadBible(book : number = 0 , chapter : number = 0)
  {
    console.log(book + ' - '+ chapter);    
    this.audioService.setAudio(`http://sajeevavahini.com/audiobible/${book+1}/${chapter+1}.mp3`);  
    this.resData = this.data.Book[book]?.Chapter[chapter];   
  }

  onVerse(form : NgForm,verse : number)
  {
    console.log(form.value, verse);
  }

  showNewListModal(template: TemplateRef<any>): void {
    this.newListModalRef = this.modalService.show(template);
    //this.newListModalRef.content.
    setTimeout(() => document.getElementById("title").focus(), 250);
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
