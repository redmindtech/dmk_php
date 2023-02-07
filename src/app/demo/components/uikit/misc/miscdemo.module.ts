import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscDemoComponent } from './miscdemo.component';
import { MiscDemoRoutingModule } from './miscdemo-routing.module';
import { ProgressBarModule } from 'primeng/progressbar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ScrollTopModule } from 'primeng/scrolltop';

import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { RadioButtonModule } from 'primeng/radiobutton';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ChartModule } from 'primeng/chart';
import { StyleClassModule } from 'primeng/styleclass';
import { MenuModule } from 'primeng/menu';
import { CreateMeetingComponent } from 'src/app/demo/components/create-meeting/create-meeting.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessageService } from 'primeng/api';
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		MiscDemoRoutingModule,
		ProgressBarModule,
		BadgeModule,
		AvatarModule,
		ScrollPanelModule,
		TagModule,
		ChipModule,
		ButtonModule,
		SkeletonModule,
		AvatarGroupModule,
		ScrollTopModule,
		CommonModule,
		FormsModule,
		
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
		RadioButtonModule,
		ImageModule,
		DialogModule,
		TableModule,
		SidebarModule,
		ChartModule,
		StyleClassModule,
		MenuModule,
		OverlayPanelModule,
		ReactiveFormsModule
	],
	declarations: [MiscDemoComponent]
})
export class MiscDemoModule { }
