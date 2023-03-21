import { SignupService } from "./signup/signup.service";
import { HomeRoutingModule } from "./home.routing.module";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SigninComponent } from "./signin/signin.component";
import { VmessageModule } from "./../shared/components/vmessage/vmessage.module";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
  ],
  declarations: [SigninComponent, SignupComponent, HomeComponent],
  providers: [SignupService],
})
export class HomeModule {}
