import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallComponent } from 'src/lib/wall/wall.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-root', pathMatch : 'full'},
  { path: "app-root", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
