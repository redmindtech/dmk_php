import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import {LoginModule} from './demo/components/auth/login/login.module'
import { DocumentationModule} from './demo/components/documentation/documentation.module'
import { EncrDecrServiceService } from 'src/app/service/encr-decr-service.service';
import { MediaDemoModule } from './demo/components/uikit/media/mediademo.module';
//import { FormBuilder } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateStateAdminComponent } from './demo/components/create-state-admin/create-state-admin.component';
import { CreateDistrictAdminComponent } from './demo/components/create-district-admin/create-district-admin.component';
import { CreateOfficeBearersComponent } from './demo/components/create-office-bearers/create-office-bearers.component';
import { NewpasswordComponent } from './demo/components/newpassword/newpassword.component';
//import { CreateMeetingComponent } from './demo/components/create-meeting/create-meeting.component';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, CreateStateAdminComponent, CreateDistrictAdminComponent, CreateOfficeBearersComponent, NewpasswordComponent, 
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,LoginModule,DocumentationModule,BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule,MediaDemoModule

    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,EncrDecrServiceService
    ],
    exports:[
        FormsModule, ReactiveFormsModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
