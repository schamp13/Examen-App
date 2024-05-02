import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { ExamenScreenComponent } from './screens/examen-screen/examen-screen.component';
import { ExamenLecturaComponent } from './partials/examen-lectura/examen-lectura.component';
import { ExamenAudioComponent } from './partials/examen-audio/examen-audio.component';
import { ExamenGramaticaComponent } from './partials/examen-gramatica/examen-gramatica.component';
import { ResultadoScreenComponent } from './screens/resultado-screen/resultado-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    NavbarComponent,
    ExamenScreenComponent,
    ExamenLecturaComponent,
    ExamenAudioComponent,
    ExamenGramaticaComponent,
    ResultadoScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
