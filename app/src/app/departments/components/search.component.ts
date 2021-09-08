// Librerías.
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-departments-search',
    templateUrl: '../pages/search.page.html'
})
export class SearchComponent implements OnInit {

    constructor(
        private titleService: Title
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('Buscador de departamentos');
    }

}
