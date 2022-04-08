import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanComponent } from './scan.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ScanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: ScanComponent
      }
    ]),
  ]
})
export class ScanModule { }
