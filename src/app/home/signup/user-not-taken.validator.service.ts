import { AbstractControl } from "@angular/forms";
import { SignupService } from "./signup.service";
import { Injectable } from "@angular/core";

import { debounceTime, map, switchMap, first } from "rxjs/operators";
@Injectable()
export class UserNotTakenValidatorService {
  constructor(private SignupService: SignupService) {}

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) => {
            return this.SignupService.checkUserNameTaken(userName);
          })
        )
        .pipe(map((isTaken) => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
