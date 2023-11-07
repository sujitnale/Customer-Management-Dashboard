import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseHttpService } from 'src/app/core/services/base-http.service';

@Component({
  selector: 'add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent {
  form!: FormGroup;
  submitted = false;
  private id: number;
  firstname: string = '';
  lastname: string = '';
  emaill: string = '';
  phonenumber: number = 0;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private baseHttpService: BaseHttpService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
  }

  ngOnInit() {
    this.baseHttpService.getNewCustomerDetails(this.id).subscribe(res => {
      this.firstname = res[0].firstName;
      this.lastname = res[0].lastName;
      this.emaill= res[0].email;
      this.phonenumber = parseInt(res[0].phoneNumber);
    });
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('().{1,20}')]],
      lastName: ['', [Validators.required, Validators.pattern('().{1,20}')]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('().{1,20}')]]
  });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    else{
      this.baseHttpService.setNewCustomerDetails(this.form, this.id);
      this.router.navigate(['/customer-history']);
    }

  }

}
