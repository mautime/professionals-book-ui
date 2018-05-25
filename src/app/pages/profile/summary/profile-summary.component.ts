import { OnInit, Component } from "@angular/core";
import { ProfessionalProfileService } from "../../../services/professional-profile.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'profile-summary', 
    templateUrl: './profile-summary.component.html', 
    styleUrls: ['./profile-summary.component.scss']
})
export class ProfileSummaryComponent implements OnInit {
    profileSummary: any = {};

    constructor(private route: ActivatedRoute, private professionalProfileService: ProfessionalProfileService){}

    ngOnInit(){
        console.log('ProfileSummaryComponent#ngOnInit');
        console.log(this.route.snapshot.params.id);
        this.professionalProfileService.getSummary(this.route.snapshot.params.id).subscribe(response => {
            console.log('professionalProfileService#get - SUCCESS');
            console.log(response);
            this.profileSummary = response.data;
        });
    }
}