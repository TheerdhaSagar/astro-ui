import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.scss']
})
export class GemComponent implements OnInit {
  private _router: Router;

  constructor(router: Router) {
    this._router = router;

  }

  ngOnInit() {
  }

  appointment() {
    this._router.navigate(['appointment']);
  }

}
