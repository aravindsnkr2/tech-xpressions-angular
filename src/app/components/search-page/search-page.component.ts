import { Component, OnInit } from '@angular/core';
import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  movies: any;
  searchQuery: any;

  constructor(
    private basicService: BasicService,
  ) { }

  ngOnInit(): void {
  }

  search() {
    this.movies = [];
    this.basicService.getData(this.searchQuery)
    .subscribe(
      (resp: any) => {
         this.movies = resp.Search;
      }, 
      err => {
        alert(err);
      }
    );
  }

}
