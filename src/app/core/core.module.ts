import { FooterComponent } from "./footer/footer.component";
import { RequestInterceptor } from "./auth/request.interceptor";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header/header.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AlertModule } from "../shared/components/alert/alert.module";
import { LoadingModule } from "../shared/components/loading/loading.module";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AlertModule, LoadingModule, RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
