import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';

// used to create fake backend


import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './_guards/index';
import { LoadingService, LoginService,  InterceptorService} from './_services/index';
import { LoadingComponent } from './_directives/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoadingComponent,
        HomeComponent,
        LoginComponent,
            ],
    providers: [
        LoadingService,
        LoginService,
        AuthGuard,
        { provide: Http,
         useFactory: (backend:XHRBackend, defaultOptions:RequestOptions) => {
            return new InterceptorService(backend, defaultOptions);
        },
                deps: [XHRBackend, RequestOptions]
    }

       
    ],
    
    bootstrap: [AppComponent]
})

export class AppModule { }