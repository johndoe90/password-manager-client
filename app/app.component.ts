import {Component} from 'angular2/core';
import {LoginComponent} from './components/login/login.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([{
    path: '/',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
}])
export class AppComponent {}