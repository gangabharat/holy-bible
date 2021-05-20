import { Injectable , EventEmitter} from '@angular/core';
import { ReceipeModle } from '../recipe/receipe-modle';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {
  
  receipelist = new EventEmitter<ReceipeModle[]>();

  private receipedata: ReceipeModle[] = [];

  constructor(receipe : ReceipeModle) { }
  
  saveReceipe(receipe : ReceipeModle)
  {
    this.receipedata.push(receipe);
    this.receipelist.emit(this.getReceipes());
  }

  getReceipes()
  {
    return this.receipedata.slice();
  }

}
