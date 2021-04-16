import { Injectable } from '@angular/core'

declare let toastr;

@Injectable()
export class ToastrService {
  showSuccess() {
    toastr.success('Alert');
  }

  showDanger() {
    toastr.error('Alert');
  }

  showWarning() {
    toastr.warning('Alert');
  }
}