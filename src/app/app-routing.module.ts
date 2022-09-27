import { FileComponent } from './_routes/file/file.component';
import { ErrorComponent } from './_routes/error/error.component';
import { TextingComponent } from './_routes/texting/texting.component';
import { LoginComponent } from './_routes/login/login.component';
import { MainComponent } from './_routes/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: MainComponent},
  {path: 'datenschutz', component: TextingComponent},
  {path: 'impressum', component: TextingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'datei', component: FileComponent},
  {path: 'neu', component: FileComponent},

  {path: 'logout', component: ErrorComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
