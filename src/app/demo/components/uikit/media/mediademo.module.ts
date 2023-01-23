import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaDemoComponent } from './mediademo.component';
import { MediaDemoRoutingModule } from './mediademo-routing.module';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
//import { FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	imports: [
		CommonModule,
		MediaDemoRoutingModule,
		ButtonModule,
		ImageModule,
		GalleriaModule,
		CarouselModule,
        RadioButtonModule,
        InputTextareaModule,
        InputTextModule,
        FormsModule,ReactiveFormsModule,BrowserModule,HttpClientModule
	],
	declarations: [MediaDemoComponent]
})
export class MediaDemoModule { }
