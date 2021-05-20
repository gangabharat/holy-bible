import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

 onconsolelog(message: string)
  {
    console.log(message);
  }
}
