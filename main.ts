import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { enableProdMode, NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { timer } from 'rxjs';
import { AchievyModule } from './src/achievy/achievy.module';
import { AchievyService } from './src/achievy/achievy.service';

if(process.env.NODE_ENV === 'production') enableProdMode();

// tslint:disable:max-classes-per-file
@Component({
    selector: 'app-root',
    styles: [''],
    template: `<button (click)="onAdd()">Add</button>
        <button (click)="onAddToParent()">Add to parent</button>
        <button (click)="onRemoveAll()">Remove All</button>`,
})
export class AppComponent{
    public constructor(private achievyService: AchievyService){}

    public onAdd(): void{
        this.achievyService.add({title: 'Go'});
    }

    public onAddToParent(): void{
        this.achievyService.add({title: 'Go', parent: document.querySelector('.container'), observable: timer(1000)});
    }

    public onRemoveAll(): void{
        this.achievyService.removeAll();
    }
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, AchievyModule],
})
export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
