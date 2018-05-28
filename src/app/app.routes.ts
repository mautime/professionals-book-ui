import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileSummaryComponent } from './pages/profile/summary/profile-summary.component';
import { ProfessionalComponent } from './pages/profile/professional/professional.component';
import { HobbiesComponent } from './pages/profile/hobbies/hobbies.component';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent
}, {
    path: 'profile',
    children: [{
        path: ':id',
        component: ProfileSummaryComponent,
    }],
}, {
    path: 'profile/:id/resume',
    component: ProfessionalComponent,
}, {
    path: 'profile/:id/hobbies',
    component: HobbiesComponent,
}, {
    path: 'implicit/callback',
    component: OktaCallbackComponent
}, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}];

export const routesModule = RouterModule.forRoot(routes);