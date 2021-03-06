import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/modules/layout.module';
import { PHOTOS_ROUTES } from './photos.routes';
import { PhotosService } from './shared/services/photos.service';
import { StoreModule } from '@ngrx/store';
import { photosReducer } from './shared/store/photos.reducer';
import { PhotosEffects } from './shared/store/photos.effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [PhotosComponent],
  imports: [
    LayoutModule,
    RouterModule.forChild(PHOTOS_ROUTES),
    StoreModule.forFeature('photos', photosReducer),
    EffectsModule.forFeature([PhotosEffects])
  ],
  providers: [PhotosService]
})
export class PhotosModule { }
