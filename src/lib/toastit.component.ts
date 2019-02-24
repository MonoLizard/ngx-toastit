import { AnimationBuilder } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ToastitService } from './toastit.service';
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
    public options?: IToastit;
    public viewHeight = 0;
    private timerSubscription?: Subscription;
    private progressSubscription?: Subscription;
    @ViewChild('elementRef') private elementRef?: ElementRef;

    constructor(private toastitService: ToastitService, private builder: AnimationBuilder) { }

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
            this.toastitService.remove(this.options.id);
        });
    }
}
