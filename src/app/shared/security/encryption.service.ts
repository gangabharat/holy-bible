import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  /**
   * encryption
  */
  public encryption(text: string) {
    return atob(text);
  }

  /**
   * decrypt
  */
  public decrypt(text: string) {
    return btoa(text);
  }
}
