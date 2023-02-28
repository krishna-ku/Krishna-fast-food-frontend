import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './components/adminpage/welcomepage/welcomepage.component';
import { ProfileComponent } from './components/commoncomponents/profile/profile.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"admin",
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        component:WelcomepageComponent,
      },
      {
        path:"profile",
        component:ProfileComponent,
      },
      {
        path:'user',
        component:UserListComponent
      }
    ]

  },
  // {path:'user',
  // component:UserListComponent,
  // pathMatch:'full',
  // canActivate:[AuthGuard]
  // },
  {
    path:"createnewuser",
    component:CreateNewUserComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
