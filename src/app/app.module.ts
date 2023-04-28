import { NgModule, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent,ContactDialogComponent } from './components/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CapabilitiesComponent } from './components/capabilities/capabilities.component';
import { EducationComponent } from './components/education/education.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PercentageChartsComponent } from './components/capabilities/percentage-charts/percentage-charts.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    AboutComponent,
    ContactComponent,
    ContactDialogComponent,
    NavBarComponent,
    FooterComponent,
    IntroComponent,
    LoginComponent,
    CapabilitiesComponent,
    EducationComponent,
    MyProjectsComponent,
    PercentageChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HighchartsChartModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

