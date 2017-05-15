import { Component, OnInit } from '@angular/core';

import { LoadingService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'loading',
    templateUrl: 'loading.component.html',
    styleUrls:['loading.component.css']
})

export class LoadingComponent {
    message: any;

    constructor(private loadingService: LoadingService) { }

    ngOnInit() {
       this.loadingService.getMessage().subscribe(message => { this.message = message; });
    }
}