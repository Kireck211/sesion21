import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { TickService } from '../shared/tick.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  emailAddress: string = ''
  password: string = '';
  returnUrl: string = '';

  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/secret';
  }

  login(event: Event) {
    event.preventDefault();
    this.authService.login(this.emailAddress);
    this.router.navigateByUrl(this.returnUrl);
  }

}
