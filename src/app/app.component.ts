import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-project';
}
