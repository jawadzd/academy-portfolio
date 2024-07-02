import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProjectSComponent } from './project-s/project-s.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileSectionComponent,
    AboutSectionComponent,
    ProjectSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
