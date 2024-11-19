import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  isMenuActive: boolean = false;
  private fragment: string = 'home';

  constructor(private router: Router, private activeRoutes: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.navigate(['taskList'], { relativeTo: this.activeRoutes });
  }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  loadList() {
    this.router.navigate(['taskList'], { relativeTo: this.activeRoutes });
  }


  loadCreatTask() {
    this.router.navigate(['createTask'], { relativeTo: this.activeRoutes });

  }


}
