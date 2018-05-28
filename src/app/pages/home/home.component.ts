import { OnInit, Component } from "@angular/core";
import { OktaAuthService } from '@okta/okta-angular';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private oktaAuth: OktaAuthService) { }

    ngOnInit() {
        console.log('HomeComponent#ngOnInit');
    }

    login() {
        this.oktaAuth.loginRedirect('/home');
    }

    logout() {
        this.oktaAuth.logout('/');
    }
}