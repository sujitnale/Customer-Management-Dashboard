import { Credential } from '../core/entity/credential';
import { Component, OnInit, Input  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //private loginResponse: LoginResponce;
  form!: FormGroup;
  submitted = false;
  user: Credential = new Credential();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.pattern('().{6,20}')]]
  });
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    else{
      this.router.navigate(['/customer-history']);
    }

  }
}
