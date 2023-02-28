import { PhotosModule } from "./photos/photos.modules";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { PhotoComponent } from "./photos/photo/photo.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
