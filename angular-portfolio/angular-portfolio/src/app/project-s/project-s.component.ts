import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-s',
  templateUrl: './project-s.component.html',
  styleUrl: './project-s.component.scss'
})
export class ProjectSComponent {

  constructor(private router: Router) { }

  navigateTo(url: string): void {
    window.open(url, "_blank");
  }

}
