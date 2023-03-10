import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SigninComponent } from "./signin/signin/signin.component";
import { VmessageModule } from "./../shared/components/vmessage/vmessage.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VmessageModule, RouterModule],
  declarations: [SigninComponent],
})
export class HomeModule {}
