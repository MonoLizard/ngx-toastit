import { animate, style } from '@angular/animations';

export const ToastitAnimation = {
    fadeIn: [style({ opacity: 0 }), animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1 }))],
    fadeOut: [animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0 }))],
    shrinkIn: [style({ width: 0 }), animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ width: '*' }))],
    shrinkOut: [animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ width: 0 }))],
    slideInLeft: [style({ opacity: 0, transform: 'translateX(-25%)' }), animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0%)' }))],
    slideOutLeft: [animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'translateX(-25%)' }))],
    slideInRight: [style({ opacity: 0, transform: 'translateX(25%)' }), animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0%)' }))],
    slideOutRight: [animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'translateX(25%)' }))],
    slideInTop: [style({ opacity: 0, transform: 'translateY(-25%)' }), animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0%)' }))],
    slideOutTop: [animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'translateY(-25%)' }))],
    slideInBottom: [style({ opacity: 0, transform: 'translateY(25%)' }), animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0%)' }))],
    slideOutBottom: [animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'translateY(25%)' }))],
    scaleIn: [style({ transform: 'scale(0)' }), animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ transform: 'scale(1)' }))],
    scaleOut: [animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ transform: 'scale(0)' }))]
}