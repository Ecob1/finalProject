import {HttpClient} from "@angular/common/http";
import {Component, Injectable} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

interface RegisterResponse {
  status: undefined;
  error: undefined;
}

@Component({
  selector: "app-register-form",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./register-form.component.html",
  styleUrl: "./register-form.component.css",
})
@Injectable({providedIn: "root"})
export class RegisterFormComponent {
  constructor(private http: HttpClient) {}

  registerForm = new FormGroup({
    name: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    passwordVerify: new FormControl(""),
  });

  registerUser() {
    console.log("register user " + this.registerForm.value.username);
    this.http
      .post<RegisterResponse>("/api/register-user", {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
      })
      .subscribe((registration) => {
        // process the registration.
        console.log("Registered User:", registration);
      });
  }
}
