import { OnInit, Component } from "@angular/core";
import { ProfessionalProfileService } from "../../../services/professional-profile.service";

@Component({
    selector: 'hobbies', 
    templateUrl: './hobbies.component.html', 
    styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
    hobbies: any[] = [];

    constructor(private profileService: ProfessionalProfileService){}

    ngOnInit(){
        console.log('HobbiesComponent#ngOnInit');
        this.profileService.getHobbies(1).subscribe(response => {
            console.log(response);
            this.hobbies = response.data;
        });
    }
}