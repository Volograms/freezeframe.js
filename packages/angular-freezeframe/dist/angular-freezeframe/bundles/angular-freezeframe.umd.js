(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('freezeframe')) :
  typeof define === 'function' && define.amd ? define('angular-freezeframe', ['exports', '@angular/core', 'freezeframe'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["angular-freezeframe"] = {}, global.ng.core, global.Freezeframe));
})(this, (function (exports, i0, Freezeframe) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var Freezeframe__default = /*#__PURE__*/_interopDefaultLegacy(Freezeframe);

  /* eslint-disable @angular-eslint/component-selector */
  var _c0 = ["freezeRef"];
  var _c1 = ["slotRef"];
  function AngularFreezeframeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
          i0__namespace.ɵɵelementStart(0, "div");
          i0__namespace.ɵɵelement(1, "img", 3, 4);
          i0__namespace.ɵɵelementEnd();
      }
      if (rf & 2) {
          var ctx_r0 = i0__namespace.ɵɵnextContext();
          i0__namespace.ɵɵadvance(1);
          i0__namespace.ɵɵpropertyInterpolate("src", ctx_r0.src, i0__namespace.ɵɵsanitizeUrl);
      }
  }
  var _c2 = ["*"];
  var SELECTOR = 'angular-freezeframe';
  var AngularFreezeframeComponent = /** @class */ (function () {
      function AngularFreezeframeComponent() {
          this.isPlaying = false;
          this.startEvent = new i0.EventEmitter();
          this.stopEvent = new i0.EventEmitter();
          this.toggleEvent = new i0.EventEmitter();
      }
      AngularFreezeframeComponent.prototype.ngAfterViewInit = function () {
          this.init();
      };
      AngularFreezeframeComponent.prototype.ngOnDestroy = function () {
          this.destroy();
      };
      AngularFreezeframeComponent.prototype.init = function () {
          var target = this.slotIsEmpty && this.src
              ? this.freezeRef.nativeElement
              : this.slotRef.nativeElement;
          this.$freezeframe = new Freezeframe__default["default"](target, this.options);
          this.initEventListeners();
      };
      AngularFreezeframeComponent.prototype.initEventListeners = function () {
          var _this = this;
          this.$freezeframe.on('toggle', function (items, isPlaying) {
              _this.isPlaying = isPlaying;
              if (isPlaying) {
                  _this.startEvent.emit({ items: items, isPlaying: isPlaying });
              }
              else {
                  _this.stopEvent.emit({ items: items, isPlaying: isPlaying });
              }
              _this.toggleEvent.emit({ items: items, isPlaying: isPlaying });
          });
      };
      Object.defineProperty(AngularFreezeframeComponent.prototype, "slotIsEmpty", {
          get: function () {
              var _a, _b, _c;
              return !((_c = (_b = (_a = this.slotRef) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.innerHTML) === null || _c === void 0 ? void 0 : _c.trim());
          },
          enumerable: false,
          configurable: true
      });
      AngularFreezeframeComponent.prototype.start = function () {
          var _a;
          (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.start();
      };
      AngularFreezeframeComponent.prototype.stop = function () {
          var _a;
          (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.stop();
      };
      AngularFreezeframeComponent.prototype.toggle = function () {
          var _a;
          (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.toggle();
      };
      AngularFreezeframeComponent.prototype.destroy = function () {
          var _a;
          (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.destroy();
      };
      return AngularFreezeframeComponent;
  }());
  AngularFreezeframeComponent.ɵfac = function AngularFreezeframeComponent_Factory(t) { return new (t || AngularFreezeframeComponent)(); };
  AngularFreezeframeComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AngularFreezeframeComponent, selectors: [["angular-freezeframe"]], viewQuery: function AngularFreezeframeComponent_Query(rf, ctx) {
          if (rf & 1) {
              i0__namespace.ɵɵviewQuery(_c0, 5);
              i0__namespace.ɵɵviewQuery(_c1, 5);
          }
          if (rf & 2) {
              var _t = void 0;
              i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.freezeRef = _t.first);
              i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.slotRef = _t.first);
          }
      }, inputs: { src: "src", options: "options" }, outputs: { startEvent: "startEvent", stopEvent: "stopEvent", toggleEvent: "toggleEvent" }, ngContentSelectors: _c2, decls: 5, vars: 1, consts: [[1, "angular-freezeframe"], [4, "ngIf"], ["slotRef", ""], [3, "src"], ["freezeRef", ""]], template: function AngularFreezeframeComponent_Template(rf, ctx) {
          if (rf & 1) {
              i0__namespace.ɵɵprojectionDef();
              i0__namespace.ɵɵelementStart(0, "div", 0);
              i0__namespace.ɵɵtemplate(1, AngularFreezeframeComponent_div_1_Template, 3, 1, "div", 1);
              i0__namespace.ɵɵelementStart(2, "div", null, 2);
              i0__namespace.ɵɵprojection(4);
              i0__namespace.ɵɵelementEnd();
              i0__namespace.ɵɵelementEnd();
          }
          if (rf & 2) {
              var _r1 = i0__namespace.ɵɵreference(3);
              i0__namespace.ɵɵadvance(1);
              i0__namespace.ɵɵproperty("ngIf", !_r1.innerHTML.trim());
          }
      }, encapsulation: 2 });
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AngularFreezeframeComponent, [{
              type: i0.Component,
              args: [{
                      selector: SELECTOR,
                      template: "\n    <div class=\"" + SELECTOR + "\">\n      <div *ngIf=\"!slotRef.innerHTML.trim()\">\n        <img #freezeRef src=\"{{src}}\" />\n      </div>\n      <div #slotRef><ng-content></ng-content></div>\n    </div>\n  "
                  }]
          }], null, { src: [{
                  type: i0.Input
              }], options: [{
                  type: i0.Input
              }], startEvent: [{
                  type: i0.Output
              }], stopEvent: [{
                  type: i0.Output
              }], toggleEvent: [{
                  type: i0.Output
              }], freezeRef: [{
                  type: i0.ViewChild,
                  args: ['freezeRef']
              }], slotRef: [{
                  type: i0.ViewChild,
                  args: ['slotRef']
              }] });
  })();

  var AngularFreezeframeModule = /** @class */ (function () {
      function AngularFreezeframeModule() {
      }
      return AngularFreezeframeModule;
  }());
  AngularFreezeframeModule.ɵfac = function AngularFreezeframeModule_Factory(t) { return new (t || AngularFreezeframeModule)(); };
  AngularFreezeframeModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: AngularFreezeframeModule });
  AngularFreezeframeModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AngularFreezeframeModule, [{
              type: i0.NgModule,
              args: [{
                      declarations: [AngularFreezeframeComponent],
                      imports: [],
                      exports: [AngularFreezeframeComponent]
                  }]
          }], null, null);
  })();
  (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(AngularFreezeframeModule, { declarations: [AngularFreezeframeComponent], exports: [AngularFreezeframeComponent] }); })();

  /*
   * Public API Surface of angular-freezeframe
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.AngularFreezeframeComponent = AngularFreezeframeComponent;
  exports.AngularFreezeframeModule = AngularFreezeframeModule;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-freezeframe.umd.js.map
