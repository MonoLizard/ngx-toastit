import { animate, style } from '@angular/animations';

export const fadeIn = [
    style({ opacity: 0 }),
    animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1 })),
];

export const fadeOut = [
    animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 1 })),
];

export const shrinkIn = [
    style({ width: 0 }),
    animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ width: '*' })),
];

export const shrinkOut = [
    animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ width: 0 })),
];

export const slideInLeft = [
    style({ opacity: 0, transform: 'translateX(-25%)' }),
    animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0%)' })),
];

export const slideOutLeft = [
    animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'translateX(25%)' })),
];

export const slideInRight = [
    style({ opacity: 0, transform: 'translateX(25%)' }),
    animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0%)' })),
];

export const slideOutRight = [
    animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'translateX(-25%)' })),
];

export const slideInTop = [
    style({ opacity: 0, transform: 'translateY(-25%)' }),
    animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0%)' })),
];

export const slideOutTop = [
    animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'translateY(25%)' })),
];

export const slideInBottom = [
    style({ opacity: 0, transform: 'translateY(25%)' }),
    animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0%)' })),
];

export const slideOutBottom = [
    animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'translateY(-25%)' })),
];

export const scaleIn = [
    style({ transform: 'scale(0)' }),
    animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'scale(1)' })),
];

export const scaleOut = [
    animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({ opacity: 0, transform: 'scale(0)' })),
];
