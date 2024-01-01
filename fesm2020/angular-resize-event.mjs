import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, NgModule } from '@angular/core';

class ResizedEvent {
    constructor(newRect, oldRect) {
        this.newRect = newRect;
        this.oldRect = oldRect;
        this.isFirst = oldRect == null;
    }
}

class ResizedDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.resized = new EventEmitter();
        this.observer = new ResizeObserver(entries => this.zone.run(() => this.observe(entries)));
    }
    ngOnInit() {
        this.observer.observe(this.element.nativeElement);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
    observe(entries) {
        const domSize = entries[0];
        const resizedEvent = new ResizedEvent(domSize.contentRect, this.oldRect);
        this.oldRect = domSize.contentRect;
        this.resized.emit(resizedEvent);
    }
}
ResizedDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ResizedDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
ResizedDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: ResizedDirective, selector: "[resized]", outputs: { resized: "resized" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ResizedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[resized]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { resized: [{
                type: Output
            }] } });

class AngularResizeEventModule {
}
AngularResizeEventModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularResizeEventModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularResizeEventModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: AngularResizeEventModule, declarations: [ResizedDirective], exports: [ResizedDirective] });
AngularResizeEventModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularResizeEventModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AngularResizeEventModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ResizedDirective
                    ],
                    imports: [],
                    exports: [
                        ResizedDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-resize-event
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularResizeEventModule, ResizedDirective, ResizedEvent };
//# sourceMappingURL=angular-resize-event.mjs.map
