import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoContentComponent } from './video-content/video-content.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginAuthGuard } from './services/login-auth-guard.guard';
import { AuthentaicationService } from './services/auth.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudioUploadComponent,
    VideoContentComponent,
    StudioLivestreamComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminLoginComponent,
    VendorLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTabsModule

  ],
  providers: [LoginAuthGuard, AuthentaicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
