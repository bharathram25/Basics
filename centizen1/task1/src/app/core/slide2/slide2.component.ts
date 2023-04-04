import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.scss']
})
export class Slide2Component {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
