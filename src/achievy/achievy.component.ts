import { AnimationBuilder } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { AchievyType } from './achievy-type';
import { AchievyService } from './achievy.service';
import { IAchievy } from './iachievy';

@Component({
    selector: 'achievy',
    styles: [require('./achievy.component.scss')],
    template: require('./achievy.component.html'),
})
export class AchievyComponent implements OnDestroy, OnInit, AfterViewInit{
    public options?: IAchievy;
    public viewHeight: number = 0;
    private timerSubscription?: Subscription;
    private progressSubscription?: Subscription;
    @ViewChild('elementRef') private elementRef?: ElementRef;

    constructor(private achievyService: AchievyService, private builder: AnimationBuilder){}

    public ngOnDestroy(): void{
        if(this.timerSubscription) this.timerSubscription.unsubscribe();
        if(this.progressSubscription) this.progressSubscription.unsubscribe();
    }

    public ngOnInit(): void{
        if(this.options)
            if(this.options.observable)
                this.progressSubscription = this.options.observable.subscribe(
                        success => this.animateOut(),
                        error => this.animateOut());
            else if(this.options.type !== AchievyType.Pin)
                this.timerSubscription = timer(this.options.timeout! * 1000)
                    .subscribe(success => this.animateOut());
    }

    public ngAfterViewInit(){
        this.viewHeight = this.elementRef!.nativeElement.clientHeight;
        this.animateIn();
    }

    private animateIn(){
        const animation = this.builder.build(this.options!.enterAnimation!);
        const player = animation.create(this.elementRef!.nativeElement);
        player.play();
        player.onDone(() => player.destroy());
    }

    private animateOut(){
        const animation = this.builder.build(this.options!.leaveAnimation!);
        const player = animation.create(this.elementRef!.nativeElement);
        player.play();
        player.onDone(() => {
            player.destroy();
            this.achievyService.remove(this.options!.id!);
        });
    }
}
