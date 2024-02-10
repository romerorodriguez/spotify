import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { TracksModule } from './modules/tracks/tracks.module';

const routes: Routes = [
  { 
    path: 'auth', 
      //importado en homemodule, siendo authmodule el hijo       /promesa
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule) //authModule nombre de la clase
  },
  {
    path:'',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path:  'tracks',
    loadChildren: () => import('./modules/tracks/tracks.module').then(m =>m.TracksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
