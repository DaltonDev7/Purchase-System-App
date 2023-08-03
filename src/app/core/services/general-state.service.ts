import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralStateService {

  private _subject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public dispachEvent() {
    this._subject.next(true)
  }

  public getEvent(){
    return this._subject.asObservable()
  }

}
