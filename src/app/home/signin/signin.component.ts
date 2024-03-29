import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  fromUrl: string = "";

  @ViewChild("userNameInput") userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.fromUrl = params["fromUrl"];
    });

    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.platformDetectorService.isPlatformBrowser &&
      this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get("userName").value;
    const password = this.loginForm.get("password").value;

    this.authService.authenticate(userName, password).subscribe(
      () =>
        this.fromUrl
          ? this.router.navigateByUrl(this.fromUrl)
          : this.router.navigate(["user", userName]),
      (err) => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser &&
          this.userNameInput.nativeElement.focus();

        alert("Invalid user name or password");
      }
    );
  }
}
