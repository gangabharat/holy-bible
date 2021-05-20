import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestStoreService {

  // Make _puppiesSource private so it's not accessible from the outside, 
  // expose it as puppies$ observable (read-only) instead.
  // Write to _puppiesSource only through specified store methods below.
  private readonly _puppiesSource = new BehaviorSubject<Puppy[]>([]);

  // Exposed observable (read-only).
  readonly puppies$ = this._puppiesSource.asObservable();

  constructor() {}

  // Get last value without subscribing to the puppies$ observable (synchronously).
  getPuppies(): Puppy[] {
    return this._puppiesSource.getValue();
  }

  private _setPuppies(puppies: Puppy[]): void {
    this._puppiesSource.next(puppies);
  }

  addPuppy(puppy: Puppy): void {
    const puppies = [...this.getPuppies(), puppy];
    this._setPuppies(puppies);
  }

  removePuppy(puppy: Puppy): void {
    const puppies = this.getPuppies().filter(p => p.id !== puppy.id);
    this._setPuppies(puppies);
  }

  adoptPuppy(puppy: Puppy): void {
    // const puppies = this.getPuppies().map(p =>
    //   p.id === puppy.id ? new Puppy({ ...p, ...{ adopted: true } }) : p
    // );
    // this._setPuppies(puppies);
  }
}

export class Puppy{

  id:number;
  name : string;
  // constructor(_id:number)
  // {
  //   this.id=_id;
  // }

}
