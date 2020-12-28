import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  private _router: Router;

  constructor(router: Router) {
    this._router = router;

  }

  ngOnInit() {
  }

  appointment() {
    this._router.navigate(['appointment']);
  }

  contact() {
    this._router.navigate(['contact']);
  }

  services(type) {
      this._router.navigate([type]);
  }

  home() {
    this._router.navigate(['home']);
  }

}
