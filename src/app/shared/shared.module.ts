import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent
  ],
})
export class SharedModule { }
//crear este modulo ng g m shared 
//angular genera un modulo llamado shared, cuando tiene --routing tambien se generara el routing de la carpeta especificada