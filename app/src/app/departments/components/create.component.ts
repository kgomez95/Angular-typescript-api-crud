// Librerías.
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-departments-create',
    templateUrl: '../pages/create.page.html'
})
export class CreateComponent implements OnInit {

    constructor(
        private titleService: Title
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('Crear departamento');
    }

}
