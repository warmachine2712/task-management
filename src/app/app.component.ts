import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginService } from './service/login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'task-management';
  active: boolean = false;

  constructor(private loginService: LoginService) {

  }
  ngOnInit(): void {


  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("Appcomponent", this.active)
  //   this.active = this.loginService.active;
  // }
}
