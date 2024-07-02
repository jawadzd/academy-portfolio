import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent {
  constructor() {}

  downloadCV() {
    window.open('assets/Jawad-Zeyneddin-Resume.pdf');
  }

  goToContact() {
    location.href = './#contact';
  }

  openLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/jawad-zeyneddin-7b687925b/';
  }

  openGitHub() {
    window.location.href = 'https://github.com/jawadzd';
  }
}