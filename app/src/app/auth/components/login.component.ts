// Librerías.
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-auth-login',
    templateUrl: '../pages/login.page.html'
})
export class LoginComponent implements OnInit {

    constructor(
        private titleService: Title
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('Inicio de sesión');
    }

}
