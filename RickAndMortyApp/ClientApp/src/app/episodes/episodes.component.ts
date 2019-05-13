import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../episode.service';
import { EpisodeSearchResults } from '../episode-search-results';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  private episodeResults: EpisodeSearchResults;
    private currentPage: number = 1;


  constructor(private service : EpisodeService) { }

    ngOnInit() {
        //fetch the first page of episodes
        this.service.getEpisodes(this.currentPage).subscribe((data: EpisodeSearchResults) => this.episodeResults = data);
    }

    //refresh Page to reload to go to current or previous page
    refreshResults() {
        this.service.getEpisodes(this.currentPage).subscribe((data: EpisodeSearchResults) => this.episodeResults = data);
    }

    //go to the next page
    nextPage() {
        this.currentPage++;
        this.refreshResults();
    }

    //go to the previous page
    previousPage() {
        this.currentPage--;
        this.refreshResults();
    }


}
