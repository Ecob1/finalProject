// import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app.routes';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


// const appRoutes: Routes = [
//   {
//     path: 'documents',
//     component: LoginComponent,
//     children: [
//       {
//         path: 'new',
//         component: RegisterComponent,
//       },
//       {
//         path: ':id',
//         component: DashboardComponent,
//       },
//     ],
//   },
//   // {
//   //   path: 'contacts',
//   //   component: ContactsComponent,
//   //   children: [
//   //     {
//   //       path: 'new',
//   //       component: ContactEditComponent,
//   //     },
//   //     {
//   //       path: ':id',
//   //       component: ContactDetailComponent,
//   //     },
//   //     {
//   //       path: ':id/edit',
//   //       component: ContactEditComponent,
//   //     },
//   //   ],
//   // },
//   // {
//   //   path: 'messages',
//   //   component: MessageListComponent,
//   // },
// ];

// @NgModule({
//   imports: [
//     BrowserModule, AppRoutingModule,
//     FormsModule,  RouterModule.forRoot(appRoutes)
//   ],
//   declarations: [
//   ]
// })
// export class AppModule { }