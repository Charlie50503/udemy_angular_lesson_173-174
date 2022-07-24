import { Subscription } from 'rxjs';
import { UserService } from './user.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserService
  ) { }
  userActivated = false;

  subscription:Subscription;
  ngOnInit(

  ) {
    this.subscription = this.userService.eventEmitter.subscribe((value) => {
      this.userActivated = value
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
