import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-secret',
  templateUrl: './another-secret.component.html',
  styleUrls: ['./another-secret.component.less', '../shared/secrets.less']
})
export class AnotherSecretComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
