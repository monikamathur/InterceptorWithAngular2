import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoadingService, LoginService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private loadingService: LoadingService ) { }

    ngOnInit() {
        // reset login status
        this.loginService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }

    login() {
this.loadingService.showLoader();
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.loadingService.hideLoader();
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                  this.loadingService.hideLoader();
                });
    }
}
