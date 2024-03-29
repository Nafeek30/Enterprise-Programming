import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CharacterComponent } from './character/character.component';
import { CharacterRolodexComponent } from './character-rolodex/character-rolodex.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { SearchComponent } from './search/search.component';
import { CharacterService } from './character.service';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { WubbaPipe } from './wubba.pipe';
import { SurpriseWubbaDirective } from './surprise-wubba.directive';
import { EpisodeService } from './episode.service';
import { LocationService } from './location.service';
import { IsSavedGuard } from './is-saved.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CharacterComponent,
    CharacterRolodexComponent,
    LocationsComponent,
    EpisodesComponent,
    SearchComponent,
    CharacterDetailComponent,
    WubbaPipe,
    SurpriseWubbaDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent, pathMatch: 'full' },
      { path: 'episodes', component: EpisodesComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'characters', component: CharacterRolodexComponent },
      { path: 'character/:id', component: CharacterDetailComponent },
    ])
  ],
  providers: [CharacterService, EpisodeService, LocationService,
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
