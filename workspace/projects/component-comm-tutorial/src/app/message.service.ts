import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  bus : BehaviorSubject<string> = new BehaviorSubject('hello');

  constructor() { }
}
