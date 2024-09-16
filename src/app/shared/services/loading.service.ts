import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading$: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}
}
