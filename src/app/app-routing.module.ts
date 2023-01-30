import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import{LoginComponent} from './demo/components/auth/login/login.component'
import { MediaDemoComponent } from './demo/components/uikit/media/mediademo.component';
import { CreateStateAdminComponent } from './demo/components/create-state-admin/create-state-admin.component';
import { CreateDistrictAdminComponent } from './demo/components/create-district-admin/create-district-admin.component';
import { CreateOfficeBearersComponent } from './demo/components/create-office-bearers/create-office-bearers.component';
import { CreateMeetingComponent } from './demo/components/create-meeting/create-meeting.component';
import { NewpasswordComponent } from './demo/components/newpassword/newpassword.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: LoginComponent,
            },
            {
                path:'self_reg',component:MediaDemoComponent
            },
            {
                path:'csa',component:CreateStateAdminComponent
            },
            {
                path:'cda',component:CreateDistrictAdminComponent
            },
            {
                path:'cob',component:CreateOfficeBearersComponent
            },
            {
                path:'meetings',component:CreateMeetingComponent
            },
            {
                path:'reset_password/:email',component:NewpasswordComponent
            },

            { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
            { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
            //{ path: 'self_reg', loadChildren: () => import('./demo/components/uikit/media/mediademo.component').then(m => m.MediaDemoComponent) },
            //{ path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
