import { Injectable, OnInit , EventEmitter} from '@angular/core';
import { Bible } from '../bible/bible';

import { HttpClientService } from '../shared/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  
  data : Bible;
  //data$ = new EventEmitter<any>();
  constructor(private _http: HttpClientService) { }  

  getBible()
  {
    return  this._http.get({ url: "assets/bible/telugu/bible.json", cacheMins: 0 });
    //return  this._http.get({ url: "assets/bible/English/bible.json", cacheMins: 0 });
    //return this.data.Book[bible];
  }
  

}
