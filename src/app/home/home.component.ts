import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../shared/toastr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  alertSuccess() {
    this.toastr.showSuccess();
  }

  alertDanger() {
    this.toastr.showDanger();
  }

  alertWarning() {
    this.toastr.showWarning();
  }

}
