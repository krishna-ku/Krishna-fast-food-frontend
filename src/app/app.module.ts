import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from "@angular/material/input"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgxUiLoaderModule,NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { RedColorDirective } from './red-color.directive';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UserpageComponent } from './components/userpage/userpage.component';
import { ProfileComponent } from './components/commoncomponents/profile/profile.component';
import { SidebarComponent } from './components/commoncomponents/sidebar/sidebar.component';
import { WelcomeComponent } from './components/adminpage/welcome/welcome.component';
import { UpdateuserComponent } from './components/commoncomponents/updateuser/updateuser.component';
import { GetallordersComponent } from './components/adminpage/getallorders/getallorders.component';
import { GetallratingsComponent } from './components/adminpage/getallratings/getallratings.component';
import { MenuComponent } from './components/commoncomponents/menu/menu/menu.component';
import { CartComponent } from './components/commoncomponents/cart/cart.component';
// import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    RedColorDirective,
    CreateNewUserComponent,
    UserpageComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    UpdateuserComponent,
    GetallordersComponent,
    GetallratingsComponent,
    MenuComponent,
    CartComponent,
    // MatTableModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
