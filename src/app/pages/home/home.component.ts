import { OnInit, Component } from "@angular/core";

@Component({
    selector: 'home', 
    templateUrl: './home.component.html', 
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(){}

    ngOnInit(){
        console.log('HomeComponent#ngOnInit');
    }
}