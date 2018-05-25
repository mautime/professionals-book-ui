import { OnInit, Component } from "@angular/core";
import { ProfessionalProfileService } from "../../../services/professional-profile.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'resume', 
    templateUrl: './professional.component.html', 
    styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
    professional: any = {};
    education: any = {};

    constructor(private route: ActivatedRoute, private professionalProfileService: ProfessionalProfileService){}

    ngOnInit(){
        console.log('ProfessionalExperienceComponent#ngOnInit');
        console.log(this.route.snapshot.params);

        this.professionalProfileService.getProfessional(this.route.snapshot.params.id).subscribe(response => {
            this.professional = response.data;
        });

        this.professionalProfileService.getEducation(this.route.snapshot.params.id).subscribe(response => {
            this.education = response.data;
        });
    }
}