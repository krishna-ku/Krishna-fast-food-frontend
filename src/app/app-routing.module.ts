import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallordersComponent } from './components/adminpage/getallorders/getallorders.component';
import { GetallratingsComponent } from './components/adminpage/getallratings/getallratings.component';
import { RestaurantdashboardComponent } from './components/adminpage/restaurantdashboard/restaurantdashboard/restaurantdashboard.component';
import { RestaurantComponent } from './components/adminpage/restaurantpage/restaurant/restaurant.component';
import { WelcomeComponent } from './components/adminpage/welcome/welcome.component';
import { CartComponent } from './components/commoncomponents/cart/cart.component';
import { MenuComponent } from './components/commoncomponents/menu/menu/menu.component';
import { ProfileComponent } from './components/commoncomponents/profile/profile.component';
import { UpdateuserComponent } from './components/commoncomponents/updateuser/updateuser.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GetmyordersComponent } from './components/userpage/getmyorders/getmyorders.component';
import { GetmyratingsComponent } from './components/userpage/getmyratings/getmyratings.component';
import { GiveratingComponent } from './components/userpage/getmyratings/postrating/giverating/giverating.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { UserwelcomepageComponent } from './components/userpage/userwelcomepage/userwelcomepage.component';
import { AuthGuard } from './services/auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { GetAllBillSComponent } from './components/commoncomponents/get-all-bill-s/get-all-bill-s.component';

const routes: Routes = [

  {
    path:'bills',
    component:GetAllBillSComponent
  },

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
        component:WelcomeComponent,
      },
      {
        path:"profile",
        component:ProfileComponent,
        // loadChildren:()=>import('./').then(m=>m.profile)
      },
      {
        path:'updateuser',
        component:UpdateuserComponent
      },
      {
        path:'orders',
        component:GetallordersComponent
      },
      {
        path:'ratings',
        component:GetallratingsComponent,
      },
      {
        path:'user',
        component:UserListComponent
      },
      {
        path:'restaurant',
        component:RestaurantComponent
      },
      {
        path:'restaurantdashboard',
        component:RestaurantdashboardComponent,
      },
    ]

  },
  {
    path:'user',
    component:UserpageComponent,
    canActivate:[AuthGuard],
    children:[
    {
      path:'',
      component:UserwelcomepageComponent
    },
    {
      path:"profile",
      component:ProfileComponent,
    },
    {
      path:'updateuser',
      component:UpdateuserComponent
    },
    {
      path:'orders',
      component:GetmyordersComponent
    },
    {
      path:'ratings',
      component:GetmyratingsComponent,
    },
    {
      path:'postrating',
      component:GiveratingComponent,
    },
  ]
  },
  {
    path:"menu",
    // component:MenuComponent,
    children:[
      {
        path:'',
        component:MenuComponent
      },
      {
      path:"cart",
      component:CartComponent,
      // canActivate:[AuthGuard],
    },
  ]
  },
  // {
  //   path:"cart",
  //   component:CartComponent
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
