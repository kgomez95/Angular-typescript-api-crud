// Librerías.
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Importaciones de departments.
import { SearchService } from '../services/search.service';

// Importaciones de environments:
import { environment } from '@environments/environment';

@Component({
    selector: 'app-departments-search',
    templateUrl: '../pages/search.page.html'
})
export class SearchComponent implements OnInit {

    public env: any;

    constructor(
        private titleService: Title,
        public searchService: SearchService
    ) {
        this.env = environment;
    }

    ngOnInit(): void {
        this.titleService.setTitle('Buscador de departamentos');
    }

}
