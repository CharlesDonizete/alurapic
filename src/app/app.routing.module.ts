import { SigninComponent } from "./home/signin/signin/signin.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./core/auth/auth.guard";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";

const routes: Routes = [
  { path: "", component: SigninComponent, canActivate: [AuthGuard] },
  {
    path: "user/:userName",
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
  },
  { path: "p/add", component: PhotoFormComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
