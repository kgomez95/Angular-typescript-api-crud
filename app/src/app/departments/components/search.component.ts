// Librerías.
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Importaciones de departments.
import { SearchService } from '../services/search.service';

@Component({
    selector: 'app-departments-search',
    templateUrl: '../pages/search.page.html'
})
export class SearchComponent implements OnInit {

    constructor(
        private titleService: Title,
        public searchService: SearchService
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('Buscador de departamentos');
    }

}
