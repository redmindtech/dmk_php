import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { FileDemoRoutingModule } from './filedemo-routing.module';
import { FileDemoComponent } from './filedemo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FileDemoRoutingModule,
		FileUploadModule,
        ReactiveFormsModule
	],
	declarations: [FileDemoComponent],
})
export class FileDemoModule { }
