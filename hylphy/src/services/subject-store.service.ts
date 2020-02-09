import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectStoreService {
  constructor() { }
  public profileObs = new BehaviorSubject<any>(null);
  public msgCardDetail = new BehaviorSubject<any>(null);
  public secreteKey = new BehaviorSubject<any>(null);

}
