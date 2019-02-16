import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { AchievyType } from './achievy-type';
import { AchievyService } from './achievy.service';
import { IAchievy } from './iachievy';

@Component({
    selector: 'achievy',
    styles: [require('./achievy.component.scss')],
    template: require('./achievy.component.html'),
})
export class AchievyComponent implements OnDestroy, OnInit{
    public options?: IAchievy;
    private timerSubscription?: Subscription;
    private progressSubscription?: Subscription;

    constructor(private achievyService: AchievyService){}

    public ngOnDestroy(): void{
        if(this.timerSubscription) this.timerSubscription.unsubscribe();
        if(this.progressSubscription) this.progressSubscription.unsubscribe();
    }

    public ngOnInit(): void{
        if(this.options)
            if(this.options.type !== AchievyType.Progress && this.options.observable)
                this.options.observable.subscribe(
                    success => this.achievyService.remove(this.options!.id!),
                    error => this.achievyService.remove(this.options!.id!));
            else if(this.options.type !== AchievyType.Static)
                this.timerSubscription = timer(this.options.timeout! * 1000)
                    .subscribe(success => this.achievyService.remove(this.options!.id!));
    }
}
