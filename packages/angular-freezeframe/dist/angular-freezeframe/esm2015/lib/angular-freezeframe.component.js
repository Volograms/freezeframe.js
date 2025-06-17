/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import Freezeframe from 'freezeframe';
import * as i0 from "@angular/core";
const _c0 = ["freezeRef"];
const _c1 = ["slotRef"];
function AngularFreezeframeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 3, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("src", ctx_r0.src, i0.ɵɵsanitizeUrl);
} }
const _c2 = ["*"];
const SELECTOR = 'angular-freezeframe';
export class AngularFreezeframeComponent {
    constructor() {
        this.isPlaying = false;
        this.startEvent = new EventEmitter();
        this.stopEvent = new EventEmitter();
        this.toggleEvent = new EventEmitter();
    }
    ngAfterViewInit() {
        this.init();
    }
    ngOnDestroy() {
        this.destroy();
    }
    init() {
        const target = this.slotIsEmpty && this.src
            ? this.freezeRef.nativeElement
            : this.slotRef.nativeElement;
        this.$freezeframe = new Freezeframe(target, this.options);
        this.initEventListeners();
    }
    initEventListeners() {
        this.$freezeframe.on('toggle', (items, isPlaying) => {
            this.isPlaying = isPlaying;
            if (isPlaying) {
                this.startEvent.emit({ items, isPlaying });
            }
            else {
                this.stopEvent.emit({ items, isPlaying });
            }
            this.toggleEvent.emit({ items, isPlaying });
        });
    }
    get slotIsEmpty() {
        var _a, _b, _c;
        return !((_c = (_b = (_a = this.slotRef) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.innerHTML) === null || _c === void 0 ? void 0 : _c.trim());
    }
    start() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.start();
    }
    stop() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.stop();
    }
    toggle() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.toggle();
    }
    destroy() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
AngularFreezeframeComponent.ɵfac = function AngularFreezeframeComponent_Factory(t) { return new (t || AngularFreezeframeComponent)(); };
AngularFreezeframeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AngularFreezeframeComponent, selectors: [["angular-freezeframe"]], viewQuery: function AngularFreezeframeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.freezeRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotRef = _t.first);
    } }, inputs: { src: "src", options: "options" }, outputs: { startEvent: "startEvent", stopEvent: "stopEvent", toggleEvent: "toggleEvent" }, ngContentSelectors: _c2, decls: 5, vars: 1, consts: [[1, "angular-freezeframe"], [4, "ngIf"], ["slotRef", ""], [3, "src"], ["freezeRef", ""]], template: function AngularFreezeframeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AngularFreezeframeComponent_div_1_Template, 3, 1, "div", 1);
        i0.ɵɵelementStart(2, "div", null, 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !_r1.innerHTML.trim());
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularFreezeframeComponent, [{
        type: Component,
        args: [{
                selector: SELECTOR,
                template: `
    <div class="${SELECTOR}">
      <div *ngIf="!slotRef.innerHTML.trim()">
        <img #freezeRef src="{{src}}" />
      </div>
      <div #slotRef><ng-content></ng-content></div>
    </div>
  `
            }]
    }], null, { src: [{
            type: Input
        }], options: [{
            type: Input
        }], startEvent: [{
            type: Output
        }], stopEvent: [{
            type: Output
        }], toggleEvent: [{
            type: Output
        }], freezeRef: [{
            type: ViewChild,
            args: ['freezeRef']
        }], slotRef: [{
            type: ViewChild,
            args: ['slotRef']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mcmVlemVmcmFtZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWZyZWV6ZWZyYW1lL3NyYy9saWIvYW5ndWxhci1mcmVlemVmcmFtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUE7Ozs7Ozs7Ozs7Ozs7O0FBUXJDLE1BQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFBO0FBYXRDLE1BQU0sT0FBTywyQkFBMkI7SUFYeEM7UUFhRSxjQUFTLEdBQUcsS0FBSyxDQUFBO1FBSVAsZUFBVSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQ3pELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUN4RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO0tBb0RyRTtJQS9DQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVPLElBQUk7UUFDVixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxHQUFHO1lBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWE7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFBO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWUsRUFBRSxTQUFrQixFQUFFLEVBQUU7WUFDckUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7WUFDMUIsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFZLFdBQVc7O1FBQ3JCLE9BQU8sQ0FBQyxDQUFBLE1BQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLGFBQWEsMENBQUUsU0FBUywwQ0FBRSxJQUFJLEVBQUUsQ0FBQSxDQUFBO0lBQ3hELENBQUM7SUFFRCxLQUFLOztRQUNILE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsS0FBSyxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELElBQUk7O1FBQ0YsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxJQUFJLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRUQsTUFBTTs7UUFDSixNQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLE1BQU0sRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFFRCxPQUFPOztRQUNMLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsT0FBTyxFQUFFLENBQUE7SUFDOUIsQ0FBQzs7c0dBM0RVLDJCQUEyQjs4RUFBM0IsMkJBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RkFBM0IsMkJBQTJCO2NBWHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFO2tCQUNNLFFBQVE7Ozs7OztHQU12QjthQUNGO2dCQUtVLEdBQUc7a0JBQVgsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNJLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUVpQixTQUFTO2tCQUFoQyxTQUFTO21CQUFDLFdBQVc7WUFDQSxPQUFPO2tCQUE1QixTQUFTO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBGcmVlemVmcmFtZSBmcm9tICdmcmVlemVmcmFtZSdcbmltcG9ydCB7IEZyZWV6ZWZyYW1lT3B0aW9ucywgRnJlZXplIH0gZnJvbSAnZnJlZXplZnJhbWUvdHlwZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5ndWxhckZyZWV6ZWZyYW1lRXZlbnQge1xuICBpdGVtczogRnJlZXplW10sXG4gIGlzUGxheWluZzogYm9vbGVhblxufVxuXG5jb25zdCBTRUxFQ1RPUiA9ICdhbmd1bGFyLWZyZWV6ZWZyYW1lJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFNFTEVDVE9SLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCIke1NFTEVDVE9SfVwiPlxuICAgICAgPGRpdiAqbmdJZj1cIiFzbG90UmVmLmlubmVySFRNTC50cmltKClcIj5cbiAgICAgICAgPGltZyAjZnJlZXplUmVmIHNyYz1cInt7c3JjfX1cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICNzbG90UmVmPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRnJlZXplZnJhbWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAkZnJlZXplZnJhbWUhOiBGcmVlemVmcmFtZVxuICBpc1BsYXlpbmcgPSBmYWxzZVxuXG4gIEBJbnB1dCgpIHNyYz86IHN0cmluZ1xuICBASW5wdXQoKSBvcHRpb25zPzogRnJlZXplZnJhbWVPcHRpb25zXG4gIEBPdXRwdXQoKSBzdGFydEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxBbmd1bGFyRnJlZXplZnJhbWVFdmVudD4oKTtcbiAgQE91dHB1dCgpIHN0b3BFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ndWxhckZyZWV6ZWZyYW1lRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB0b2dnbGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ndWxhckZyZWV6ZWZyYW1lRXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZnJlZXplUmVmJykgZnJlZXplUmVmITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2xvdFJlZicpIHNsb3RSZWYhOiBFbGVtZW50UmVmO1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95KClcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnNsb3RJc0VtcHR5ICYmIHRoaXMuc3JjXG4gICAgICA/IHRoaXMuZnJlZXplUmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgIDogdGhpcy5zbG90UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICB0aGlzLiRmcmVlemVmcmFtZSA9IG5ldyBGcmVlemVmcmFtZSh0YXJnZXQsIHRoaXMub3B0aW9ucylcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBwcml2YXRlIGluaXRFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLiRmcmVlemVmcmFtZS5vbigndG9nZ2xlJywgKGl0ZW1zOiBGcmVlemVbXSwgaXNQbGF5aW5nOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGlzUGxheWluZ1xuICAgICAgaWYgKGlzUGxheWluZykge1xuICAgICAgICB0aGlzLnN0YXJ0RXZlbnQuZW1pdCh7IGl0ZW1zLCBpc1BsYXlpbmcgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcEV2ZW50LmVtaXQoeyBpdGVtcywgaXNQbGF5aW5nIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZUV2ZW50LmVtaXQoeyBpdGVtcywgaXNQbGF5aW5nIH0pXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBzbG90SXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuc2xvdFJlZj8ubmF0aXZlRWxlbWVudD8uaW5uZXJIVE1MPy50cmltKClcbiAgfVxuXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuJGZyZWV6ZWZyYW1lPy5zdGFydCgpXG4gIH1cblxuICBzdG9wKCk6IHZvaWQge1xuICAgIHRoaXMuJGZyZWV6ZWZyYW1lPy5zdG9wKClcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLiRmcmVlemVmcmFtZT8udG9nZ2xlKClcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kZnJlZXplZnJhbWU/LmRlc3Ryb3koKVxuICB9XG59XG4iXX0=