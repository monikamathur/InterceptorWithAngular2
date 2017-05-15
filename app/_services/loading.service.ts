import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                   
                    this.subject.next();
                }
            }
        });
    }

    showLoader() {
        
        this.subject.next({ type: 'success', text: true });
    }
     hideLoader() {
        
        this.subject.next({ type: 'success', text: false });
    }

 getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
  
}