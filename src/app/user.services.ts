import { Injectable } from "@angular/core"
import { Subject } from "rxjs";

@Injectable({providedIn:"root"})
export class UserService {
  public eventEmitter = new Subject<boolean>();
}
