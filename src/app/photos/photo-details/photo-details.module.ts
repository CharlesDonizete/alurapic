import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PhotoModule } from "./../photo/photo.module";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { VmessageModule } from "./../../shared/components/vmessage/vmessage.module";
import { ShowIfLoggedModule } from "src/app/shared/directives/show-if-logged/show-if-logged.module";

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    ShowIfLoggedModule,
  ],
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
})
export class PhotoDetailsModule {}
