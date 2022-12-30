import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  username = ''
  password = ''
  isLoadingResults = false;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : [null, Validators.required],
      password : [null, Validators.required]
    })
  }

  onFormSubmit(): void {
    this.isLoadingResults = true
    console.log(this.loginForm.value)
    // this.authService.login(this.loginForm.value).subscribe(() => {
    //   this.isLoadingResults = false
    //   this.router.navigate(['/dfssf']).then(_ => console.log('you r secured'))
    // }, (err: any) => {
    //   console.log(err);
    //   this.isLoadingResults = false
    // })
  }

}
