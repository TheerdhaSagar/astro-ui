import { Component, OnInit, HostBinding } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFire, private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });

  }

  ngOnInit() {
  }

}
