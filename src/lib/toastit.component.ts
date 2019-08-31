import { AnimationBuilder } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { IToastit } from './itoastit';
import { ToastitType } from './toastit-type';

@Component({
    encapsulation: ViewEncapsulation.None,
    // tslint:disable-next-line:component-selector
    selector: 'toastit',
    styleUrls: ['./toastit.component.scss'],
    templateUrl: './toastit.component.html',
})
export class ToastitComponent implements OnDestroy, OnInit, AfterViewInit {
    @Output() animationDone = new EventEmitter();  
    @ViewChild('elementRef') private elementRef?: ElementRef;

    public options?: IToastit;
    public viewHeight = 0;
    private timerSubscription?: Subscription;
    private progressSubscription?: Subscription;

    constructor(private builder: AnimationBuilder) { }

    public ngOnDestroy(): void {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        if (this.progressSubscription) {
            this.progressSubscription.unsubscribe();
        }
    }

    public ngOnInit(): void {
        if (this.options) {
            if (this.options.observable) {
                this.progressSubscription = this.options.observable.subscribe(
                    success => this.animateOut(),
                    error => this.animateOut());
            } else if (this.options.type !== ToastitType.Pin) {
                this.timerSubscription = timer(this.options.timeout * 1000)
                    .subscribe(success => this.animateOut());
            }
        }
    }

    public ngAfterViewInit() {
        this.viewHeight = this.elementRef.nativeElement.clientHeight;
        const titleElement = this.elementRef.nativeElement.querySelector('.toastit__title');
        const titleHeight = titleElement.clientHeight;
        titleElement.style['max-height'] = titleHeight + 'px';
        if (this.options.message) {
            const messageElement = this.elementRef.nativeElement.querySelector('.toastit__message');
            const messageHeight = messageElement.clientHeight;
            messageElement.style['max-height'] = messageHeight + 'px';
        }
        this.animateIn();
    }

    private animateIn() {
        const animation = this.builder.build(this.options.enterAnimation);
        const player = animation.create(this.elementRef.nativeElement);
        player.play();
        player.onDone(() => player.destroy());
    }

    private animateOut() {
        const animation = this.builder.build(this.options.leaveAnimation);
        const player = animation.create(this.elementRef.nativeElement);
        player.play();
        player.onDone(() => {
            player.destroy();
            this.animationDone.emit();
        });
    }
}
