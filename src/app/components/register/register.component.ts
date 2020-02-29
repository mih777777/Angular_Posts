import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  aSub: Subscription

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.aSub = this.authService.register(this.form.value)
      .subscribe(
        () => {
          this.router.navigate(['/login'], {
            queryParams: {
              registered: true
            }
          })
        }
      )
  }

}
