import {AppComponent} from "./app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provide} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import { FORM_PROVIDERS } from "@angular/common";
import { HTTP_PROVIDERS } from '@angular/http';



bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);