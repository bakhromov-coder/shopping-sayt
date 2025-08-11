import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

  bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations() // ← Animatsiyalarni yoqish uchun
  ]
}).catch(err => console.error(err));