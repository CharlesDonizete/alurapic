import { RouterModule } from "@angular/router";
import { VmessageModule } from "./../../shared/components/vmessage/vmessage.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PhotoFormComponent } from "./photo-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
  ],
})
export class PhotoFormModule {}
