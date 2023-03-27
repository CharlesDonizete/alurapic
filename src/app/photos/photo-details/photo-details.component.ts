import { PhotoComment } from "./../photo/photo.comment";
import { Observable } from "rxjs";
import { PhotoService } from "./../photo/photo.sevice";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Photo } from "../photo/photo";

@Component({
  templateUrl: "./photo-details.component.html",
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }
}
