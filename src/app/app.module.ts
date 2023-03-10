import { HomeModule } from "./home/home.module";
import { PhotosModule } from "./photos/photos.module";
import { ErrorsModule } from "./errors/errors.module";
import { AppRoutingModule } from "./app.routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { VmessageComponent } from "./shared/components/vmessage/vmessage.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    PhotosModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
