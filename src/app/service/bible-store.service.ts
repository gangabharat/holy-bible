import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Bible } from '../bible/bible';


@Injectable({
  providedIn: 'root'
})
export class BibleStoreService {

   // Make _puppiesSource private so it's not accessible from the outside, 
  // expose it as puppies$ observable (read-only) instead.
  // Write to _puppiesSource only through specified store methods below.
  private readonly _puppiesSource = new BehaviorSubject<Bible[]>([]);

  // Exposed observable (read-only).
  readonly puppies$ = this._puppiesSource.asObservable();

  constructor() {}

  // Get last value without subscribing to the puppies$ observable (synchronously).
  getPuppies(): Bible[] {
    return this._puppiesSource.getValue();
  }

  private _setPuppies(puppies: Bible[]): void {
    this._puppiesSource.next(puppies);
  }

  addPuppy(puppy: Bible): void {
    const puppies = [...this.getPuppies(), puppy];
    this._setPuppies(puppies);
  }

  removePuppy(puppy: Bible): void {
    //const puppies = this.getPuppies().filter(p => p.id !== puppy.id);
    //this._setPuppies(puppies);
  }

  adoptPuppy(puppy: Bible): void {
    // const puppies = this.getPuppies().map(p =>
    //   p.id === puppy.id ? new Puppy({ ...p, ...{ adopted: true } }) : p
    // );
    // this._setPuppies(puppies);
  }
}
