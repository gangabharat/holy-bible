import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BibleVerse } from '../bible/bible';
import { CacheService } from '../shared/cache.service';

@Injectable({
  providedIn: 'root'
})
export class RecentHistoryService {

  dataBibleVerse = new EventEmitter<BibleVerse[]>();
  data  = []; 
  constructor(private cacheService: CacheService) {     
    this.data = cacheService.load("bible-recent");    
  }
  
  save(bibleVerse : BibleVerse)
  {          
    //this.data.push(bibleVerse)
    this.cacheService.save({key:'bible-recent',data: this.data,expirationMins : 24*60});
    this.dataBibleVerse.emit(this.data);
    console.log(this.data);
  }


}
