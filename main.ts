import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { enableProdMode, NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { timer } from 'rxjs';
import { AchievyType } from './src/achievy/achievy-type';
import { AchievyModule } from './src/achievy/achievy.module';
import { AchievyService } from './src/achievy/achievy.service';

if(process.env.NODE_ENV === 'production') enableProdMode();

// tslint:disable:max-classes-per-file
@Component({
    selector: 'app-root',
    styles: [''],
    template: `<button (click)="onAdd()">Add</button>
        <button (click)="onAddToParent()">Add to parent</button>
        <button (click)="onRemoveAll()">Remove All</button>
        <button (click)="onAddStatic()">Add static</button>`,
})
export class AppComponent{
    public constructor(private achievyService: AchievyService){}

    public onAdd(): void{
        const randomEnum: AchievyType = [AchievyType.Error, AchievyType.Info, AchievyType.Progress, AchievyType.Success]
            [Math.round(Math.random() * 3)];
        this.achievyService.add({message: 'Achieved',
            title: 'Achievy ' + randomEnum, type: randomEnum});
    }

    public onAddToParent(): void{
        this.achievyService.add({message: 'Achievy is happy', observable: timer(1000),
            title: 'Adopted Achievy', type: AchievyType.Progress});
    }

    public onAddStatic(){
        this.achievyService.add({message: 'Achievy is extasic about what\'s happening!',
            title: 'Static Achievy', type: AchievyType.Pin});
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
