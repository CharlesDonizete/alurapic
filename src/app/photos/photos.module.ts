import { PhotoDetailsModule } from "./photo-details/photo-details.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    CommonModule,
    PhotoListModule,
    PhotoFormModule,
    PhotoListModule,
    PhotoDetailsModule,
  ],
})
export class PhotosModule {}
