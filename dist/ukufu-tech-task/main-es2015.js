(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_models_plateau__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/models/plateau */ "./src/app/core/models/plateau.ts");
/* harmony import */ var _core_services_rover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/rover.service */ "./src/app/core/services/rover.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(roverService) {
        this.roverService = roverService;
        this.title = 'ukufu-tech-task';
        this.rovers = [
            {
                origin: {
                    coord: { x: 1, y: 2 },
                    orientation: 0,
                },
                commandList: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
                commandInput: 'LMLMLMLMM',
            },
            {
                origin: {
                    coord: { x: 3, y: 3 },
                    orientation: 90,
                },
                commandList: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
                commandInput: 'MMRMMRMRRM',
            },
        ];
    }
    ngOnInit() {
        this.initializeApp();
    }
    initializeApp() {
        // this.addPlateau();
        // this.addRovers();
        // this.run();
    }
    addPlateau() {
        this.plateau = new _core_models_plateau__WEBPACK_IMPORTED_MODULE_1__["Plateau"]({ x: 5, y: 5 });
    }
    addRovers() {
        for (let rover of this.rovers) {
            rover.plateauMap = this.plateau;
            const r = this.roverService.createRover(rover);
            r.commandList = rover.commandList;
        }
    }
    run() {
        for (let rover of this.roverService.roverList) {
            this.roverService.executeRoverCommands(rover);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_rover_service__WEBPACK_IMPORTED_MODULE_2__["RoverService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _core_services_rover_service__WEBPACK_IMPORTED_MODULE_2__["RoverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _plateau_plateau_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plateau/plateau.module */ "./src/app/plateau/plateau.module.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _rover_rover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rover/rover.module */ "./src/app/rover/rover.module.ts");
/* harmony import */ var _simulation_simulation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./simulation/simulation.component */ "./src/app/simulation/simulation.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _core_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _plateau_plateau_module__WEBPACK_IMPORTED_MODULE_7__["PlateauModule"],
            _rover_rover_module__WEBPACK_IMPORTED_MODULE_10__["RoverModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _simulation_simulation_component__WEBPACK_IMPORTED_MODULE_11__["SimulationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _core_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _plateau_plateau_module__WEBPACK_IMPORTED_MODULE_7__["PlateauModule"],
        _rover_rover_module__WEBPACK_IMPORTED_MODULE_10__["RoverModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _simulation_simulation_component__WEBPACK_IMPORTED_MODULE_11__["SimulationComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _core_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _plateau_plateau_module__WEBPACK_IMPORTED_MODULE_7__["PlateauModule"],
                    _rover_rover_module__WEBPACK_IMPORTED_MODULE_10__["RoverModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_rover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/rover.service */ "./src/app/core/services/rover.service.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_plateau_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/plateau.service */ "./src/app/core/services/plateau.service.ts");








class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [_services_plateau_service__WEBPACK_IMPORTED_MODULE_6__["PlateauService"], _services_rover_service__WEBPACK_IMPORTED_MODULE_2__["RoverService"]],
        };
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]], exports: [_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
                exports: [_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/enums/cardinals.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/core/enums/cardinals.enum.ts ***!
  \**********************************************/
/*! exports provided: Cardinals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinals", function() { return Cardinals; });
var Cardinals;
(function (Cardinals) {
    Cardinals[Cardinals["N"] = 0] = "N";
    Cardinals[Cardinals["E"] = 90] = "E";
    Cardinals[Cardinals["S"] = 180] = "S";
    Cardinals[Cardinals["W"] = 270] = "W";
})(Cardinals || (Cardinals = {}));


/***/ }),

/***/ "./src/app/core/enums/commands.enum.ts":
/*!*********************************************!*\
  !*** ./src/app/core/enums/commands.enum.ts ***!
  \*********************************************/
/*! exports provided: Commands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commands", function() { return Commands; });
var Commands;
(function (Commands) {
    Commands[Commands["M"] = 0] = "M";
    Commands[Commands["L"] = -90] = "L";
    Commands[Commands["R"] = 90] = "R";
})(Commands || (Commands = {}));


/***/ }),

/***/ "./src/app/core/enums/events.enum.ts":
/*!*******************************************!*\
  !*** ./src/app/core/enums/events.enum.ts ***!
  \*******************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
var Events;
(function (Events) {
    Events[Events["AppStarted"] = 0] = "AppStarted";
    Events[Events["PlateauCreated"] = 1] = "PlateauCreated";
    Events[Events["RoversCreated"] = 2] = "RoversCreated";
    Events[Events["SimulationReset"] = 3] = "SimulationReset";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");













const MaterialModules = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], MaterialModules],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], MaterialModules],
                exports: [MaterialModules],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/models/plateau.ts":
/*!****************************************!*\
  !*** ./src/app/core/models/plateau.ts ***!
  \****************************************/
/*! exports provided: Plateau */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plateau", function() { return Plateau; });
class Plateau {
    constructor(upperRight) {
        this.grid = {
            bottomLeft: {
                x: 0,
                y: 0,
            },
            upperRight: null,
        };
        this.grid.upperRight = Object.assign(new Object(), upperRight);
    }
}


/***/ }),

/***/ "./src/app/core/models/rover.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/rover.ts ***!
  \**************************************/
/*! exports provided: Rover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rover", function() { return Rover; });
/* harmony import */ var _enums_commands_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/commands.enum */ "./src/app/core/enums/commands.enum.ts");
/* harmony import */ var _enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/cardinals.enum */ "./src/app/core/enums/cardinals.enum.ts");


class Rover {
    constructor(data) {
        this.commandInput = '';
        this.commandList = [];
        this.commandError = null;
        this.id = +Date.now();
        this.origin = data.origin;
        this.position = Object.assign({}, data.origin);
        this.commandInput = data.commandInput;
        this.commandList = this.commandInput.split('');
    }
    get x() {
        return this.position.coord.x;
    }
    get y() {
        return this.position.coord.y;
    }
    get orientation() {
        return _enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_1__["Cardinals"][this.position.orientation];
    }
    prepareCommand(cmd) {
        // Prepare command to be executed
        // Return nextPosition of rover
        const cmdValue = _enums_commands_enum__WEBPACK_IMPORTED_MODULE_0__["Commands"][cmd];
        console.log('cmdValue', cmdValue);
        if (cmdValue === _enums_commands_enum__WEBPACK_IMPORTED_MODULE_0__["Commands"].M) {
            switch (this.position.orientation) {
                case _enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_1__["Cardinals"].N:
                    return {
                        coord: { x: this.x, y: this.y + 1 },
                        orientation: this.position.orientation,
                    };
                case _enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_1__["Cardinals"].E:
                    return {
                        coord: { x: this.x + 1, y: this.y },
                        orientation: this.position.orientation,
                    };
                case _enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_1__["Cardinals"].S:
                    return {
                        coord: { x: this.x, y: this.y - 1 },
                        orientation: this.position.orientation,
                    };
                case _enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_1__["Cardinals"].W:
                    return {
                        coord: { x: this.x - 1, y: this.y },
                        orientation: this.position.orientation,
                    };
            }
        }
        else {
            const position = Object.assign({}, this.position);
            position.orientation = this.toCardinalEnum(position.orientation + cmdValue);
            return position;
        }
    }
    moveTo(pos) {
        // Move to newPosition after checks in Service
        console.log('moveTo', pos);
        this.position = pos;
    }
    toCardinalEnum(degree) {
        if (degree < 0) {
            return degree + 360;
        }
        else if (degree >= 360) {
            return degree - 360;
        }
        else {
            return degree;
        }
    }
}


/***/ }),

/***/ "./src/app/core/services/app.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/app.service.ts ***!
  \**********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _enums_events_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/events.enum */ "./src/app/core/enums/events.enum.ts");




class AppService {
    constructor() {
        this.events = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_enums_events_enum__WEBPACK_IMPORTED_MODULE_2__["Events"].AppStarted);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/plateau.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/plateau.service.ts ***!
  \**************************************************/
/*! exports provided: PlateauService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlateauService", function() { return PlateauService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_plateau__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/plateau */ "./src/app/core/models/plateau.ts");
/* harmony import */ var _enums_events_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/events.enum */ "./src/app/core/enums/events.enum.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/core/services/app.service.ts");





class PlateauService {
    constructor(appService) {
        this.appService = appService;
        this.plateau = null;
    }
    createPlateau(coord) {
        if (this.validatePlateauCoord(coord)) {
            this.plateau = new _models_plateau__WEBPACK_IMPORTED_MODULE_1__["Plateau"](coord);
            this.appService.events.next(_enums_events_enum__WEBPACK_IMPORTED_MODULE_2__["Events"].PlateauCreated);
            return this.plateau;
        }
        else {
            return null;
        }
    }
    validatePlateauCoord(coord) {
        if (coord.x < 0 || coord.y < 0) {
            return false;
        }
        else if (coord.x === 0 && coord.y === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
PlateauService.ɵfac = function PlateauService_Factory(t) { return new (t || PlateauService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
PlateauService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlateauService, factory: PlateauService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlateauService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/rover.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/rover.service.ts ***!
  \************************************************/
/*! exports provided: RoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoverService", function() { return RoverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enums_commands_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/commands.enum */ "./src/app/core/enums/commands.enum.ts");
/* harmony import */ var _models_rover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/rover */ "./src/app/core/models/rover.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/core/services/app.service.ts");
/* harmony import */ var _plateau_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plateau.service */ "./src/app/core/services/plateau.service.ts");






class RoverService {
    constructor(appService, plateauService) {
        this.appService = appService;
        this.plateauService = plateauService;
        this.roverList = [];
    }
    get events() {
        return this.appService.events;
    }
    get plateau() {
        return this.plateauService.plateau;
    }
    createRover(rover) {
        const newRover = new _models_rover__WEBPACK_IMPORTED_MODULE_2__["Rover"](rover);
        if (!this.offGridCheck(newRover.origin.coord))
            return null;
        this.roverList.push(newRover);
        console.log('roverCreated', newRover);
        return newRover;
    }
    removeRover(id) {
        const index = this.roverList.findIndex((x) => x.id === id);
        if (index >= 0) {
            this.roverList.splice(index, 1);
        }
    }
    executeRoverCommands(rover) {
        //Set as active rover
        this.activeRover = rover;
        console.log(rover);
        for (let cmd of rover.commandList) {
            // Prepare command to be executed;
            const nextPosition = rover.prepareCommand(cmd);
            console.log('nextPosition', nextPosition);
            if (_enums_commands_enum__WEBPACK_IMPORTED_MODULE_1__["Commands"][cmd] === _enums_commands_enum__WEBPACK_IMPORTED_MODULE_1__["Commands"].M) {
                // If its a movement command, check if the Rover will stay whitin borders
                // or if it'll collide with another rover
                if (!this.offGridCheck(nextPosition.coord)) {
                    rover.commandError = "Command error: Can't move offgrid.";
                    return false;
                }
                if (!this.collisionCheck(nextPosition.coord)) {
                    rover.commandError = "Command error: Can't move, collision ahead.";
                    return false;
                }
            }
            // Execute command
            rover.moveTo(nextPosition);
        }
        console.log(`Rover[${rover.id}] commands finished executing.`);
        return true;
    }
    offGridCheck(coord) {
        // Check if Rover will be inside the plateau border
        // true if clear to move
        const plateau = this.plateauService.plateau;
        if (plateau.grid.bottomLeft.x > coord.x ||
            plateau.grid.bottomLeft.y > coord.y ||
            plateau.grid.upperRight.x < coord.x ||
            plateau.grid.upperRight.y < coord.y) {
            return false;
        }
        else {
            return true;
        }
    }
    collisionCheck(coord) {
        // Check if Rover will collide with another rover
        // true if clear to move
        return this.roverList.findIndex((rover) => rover.position.coord.x === coord.x && rover.position.coord.y === coord.y) < 0;
    }
}
RoverService.ɵfac = function RoverService_Factory(t) { return new (t || RoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_plateau_service__WEBPACK_IMPORTED_MODULE_4__["PlateauService"])); };
RoverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoverService, factory: RoverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }, { type: _plateau_service__WEBPACK_IMPORTED_MODULE_4__["PlateauService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_enums_events_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/enums/events.enum */ "./src/app/core/enums/events.enum.ts");
/* harmony import */ var _core_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/app.service */ "./src/app/core/services/app.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _plateau_plateau_form_plateau_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plateau/plateau-form/plateau-form.component */ "./src/app/plateau/plateau-form/plateau-form.component.ts");
/* harmony import */ var _rover_rover_form_rover_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rover/rover-form/rover-form.component */ "./src/app/rover/rover-form/rover-form.component.ts");
/* harmony import */ var _simulation_simulation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../simulation/simulation.component */ "./src/app/simulation/simulation.component.ts");











const _c0 = ["stepper"];
const _c1 = ["plateauForm"];
function HomeComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Plateau");
} }
function HomeComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Rovers");
} }
function HomeComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Simulation");
} }
class HomeComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngAfterViewInit() { }
    ngOnInit() {
        // Observe app events to move throught the stepper
        this.appService.events.subscribe((val) => {
            switch (val) {
                case _core_enums_events_enum__WEBPACK_IMPORTED_MODULE_1__["Events"].PlateauCreated:
                    this.goToNextStep();
                    break;
                case _core_enums_events_enum__WEBPACK_IMPORTED_MODULE_1__["Events"].RoversCreated:
                    this.goToNextStep();
                    break;
                case _core_enums_events_enum__WEBPACK_IMPORTED_MODULE_1__["Events"].SimulationReset:
                    this.stepper.selectedIndex = 0;
                    break;
            }
        });
    }
    goToNextStep() {
        this.stepper.selected.completed = true;
        this.stepper.next();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.plateauForm = _t.first);
    } }, decls: 25, vars: 4, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutGap", "10px"], ["color", "primary"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "center start", 1, "page-container"], ["fxFlex", "50"], [3, "linear"], ["stepper", ""], [3, "completed", "editable"], ["matStepLabel", ""], ["plateauForm", ""], [3, "editable"], ["roverForm", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ukufu Tech Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NASA Exploration Mission Simulator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Complete simulation settings to see result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-horizontal-stepper", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_ng_template_15_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-plateau-form", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_ng_template_19_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-rover-form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_ng_template_23_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-simulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", false)("editable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editable", true);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _plateau_plateau_form_plateau_form_component__WEBPACK_IMPORTED_MODULE_7__["PlateauFormComponent"], _rover_rover_form_rover_form_component__WEBPACK_IMPORTED_MODULE_8__["RoverFormComponent"], _simulation_simulation_component__WEBPACK_IMPORTED_MODULE_9__["SimulationComponent"]], styles: [".page-container[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b3AvcHJvamVjdHMvdWt1ZnUtdGVjaC10YXNrL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuIiwiLnBhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _core_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
        }], plateauForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['plateauForm']
        }] }); })();


/***/ }),

/***/ "./src/app/plateau/plateau-form/plateau-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/plateau/plateau-form/plateau-form.component.ts ***!
  \****************************************************************/
/*! exports provided: PlateauFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlateauFormComponent", function() { return PlateauFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_plateau_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/plateau.service */ "./src/app/core/services/plateau.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function PlateauFormComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Only numbers are accepted. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlateauFormComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (0, 0) coordinates are invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlateauFormComponent {
    constructor(fb, plateauService) {
        this.fb = fb;
        this.plateauService = plateauService;
        this.controls = {
            x: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]),
            y: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]),
        };
        this.form = this.fb.group(this.controls);
    }
    ngOnInit() {
        // Form validation observer
        this.form.valueChanges.subscribe((value) => {
            if (value.x === '0' && value.y === '0') {
                this.form.setErrors({ sameAsOrigin: true });
            }
            else {
                this.form.setErrors(null);
            }
        });
    }
    nextBtnClick() {
        //Create ICoord object
        const { x, y } = this.form.value;
        const coords = {
            x: +x,
            y: +y,
        };
        const plateau = this.plateauService.createPlateau(coords);
        if (!plateau)
            this.form.reset();
    }
}
PlateauFormComponent.ɵfac = function PlateauFormComponent_Factory(t) { return new (t || PlateauFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_plateau_service__WEBPACK_IMPORTED_MODULE_2__["PlateauService"])); };
PlateauFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlateauFormComponent, selectors: [["app-plateau-form"]], decls: 42, vars: 6, consts: [["fxFlex", "", "fxLayout", "column"], [1, "mat-body-2"], [3, "formGroup"], [1, "mat-title"], ["fxLayout", "row", "fxLayoutGap", "30px"], ["fxLayout", "column"], [1, "mat-caption"], ["fxLayout", "row", "fxLayoutGap", "5px"], ["matPrefix", ""], ["disabled", "", "matInput", "", "placeholder", "x", "readonly", "", 3, "value"], ["matSuffix", ""], ["disabled", "", "matInput", "", "placeholder", "y", "readonly", "", 3, "value"], ["matInput", "", "placeholder", "x", "type", "text", "formControlName", "x"], ["matInput", "", "placeholder", "y", "type", "text", "formControlName", "y"], ["class", "form-error-msg", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end start"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [1, "form-error-msg"]], template: function PlateauFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To create a plateau for the rovers navigation, input the grid coordinates below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lower left coordinates are locked at (0,0). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Grid coordinates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lower Left:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Upper right:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PlateauFormComponent_div_37_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PlateauFormComponent_div_38_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlateauFormComponent_Template_button_click_40_listener() { return ctx.nextBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["x"].hasError("pattern") || ctx.form.controls["y"].hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.hasError("sameAsOrigin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b3AvcHJvamVjdHMvdWt1ZnUtdGVjaC10YXNrL3NyYy9hcHAvcGxhdGVhdS9wbGF0ZWF1LWZvcm0vcGxhdGVhdS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF0ZWF1L3BsYXRlYXUtZm9ybS9wbGF0ZWF1LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wbGF0ZWF1L3BsYXRlYXUtZm9ybS9wbGF0ZWF1LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA3MHB4O1xufVxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlateauFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plateau-form',
                templateUrl: './plateau-form.component.html',
                styleUrls: ['./plateau-form.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_plateau_service__WEBPACK_IMPORTED_MODULE_2__["PlateauService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/plateau/plateau.module.ts":
/*!*******************************************!*\
  !*** ./src/app/plateau/plateau.module.ts ***!
  \*******************************************/
/*! exports provided: PlateauModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlateauModule", function() { return PlateauModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _plateau_form_plateau_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plateau-form/plateau-form.component */ "./src/app/plateau/plateau-form/plateau-form.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");






class PlateauModule {
}
PlateauModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlateauModule });
PlateauModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlateauModule_Factory(t) { return new (t || PlateauModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forRoot()]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlateauModule, { declarations: [_plateau_form_plateau_form_component__WEBPACK_IMPORTED_MODULE_2__["PlateauFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]], exports: [_plateau_form_plateau_form_component__WEBPACK_IMPORTED_MODULE_2__["PlateauFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlateauModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_plateau_form_plateau_form_component__WEBPACK_IMPORTED_MODULE_2__["PlateauFormComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forRoot()],
                exports: [_plateau_form_plateau_form_component__WEBPACK_IMPORTED_MODULE_2__["PlateauFormComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/rover/rover-form/rover-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/rover/rover-form/rover-form.component.ts ***!
  \**********************************************************/
/*! exports provided: RoverFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoverFormComponent", function() { return RoverFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/enums/cardinals.enum */ "./src/app/core/enums/cardinals.enum.ts");
/* harmony import */ var _core_enums_events_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/enums/events.enum */ "./src/app/core/enums/events.enum.ts");
/* harmony import */ var _core_services_rover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/rover.service */ "./src/app/core/services/rover.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
















const _c0 = function (a0, a1) { return { form: a0, index: a1 }; };
function RoverFormComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rover #", i_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, f_r3, i_r4));
} }
function RoverFormComponent_ng_template_9_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cardinal_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cardinal_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cardinal_r9.name, " ");
} }
function RoverFormComponent_ng_template_9_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Coordinates must be between (0,0) and (", ctx_r8.plateau.grid.upperRight.x, ", ", ctx_r8.plateau.grid.upperRight.y, ")");
} }
const _c1 = function (a0) { return [a0]; };
function RoverFormComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Deploy coordinates and orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RoverFormComponent_ng_template_9_mat_option_20_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RoverFormComponent_ng_template_9_span_21_Template, 2, 2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverFormComponent_ng_template_9_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const index_r6 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeLastCommandBtnClick(index_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverFormComponent_ng_template_9_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const index_r6 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.addCommandBtnClick(index_r6, "M"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverFormComponent_ng_template_9_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const index_r6 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.addCommandBtnClick(index_r6, "L"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverFormComponent_ng_template_9_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const index_r6 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addCommandBtnClick(index_r6, "R"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Valid command inputs: M, L or R");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverFormComponent_ng_template_9_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const index_r6 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.removeRoverFormBtnClick(index_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "REMOVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_r5 = ctx.form;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", form_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.orientationOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", form_r5.hasError("offGrid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, form_r5.controls["commandInput"].hasError("pattern") ? "form-error" : ""));
} }
class RoverFormComponent {
    constructor(fb, roverService) {
        this.fb = fb;
        this.roverService = roverService;
        this.roverForms = [];
        this.Cardinals = _core_enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_2__["Cardinals"];
        this.orientationOpts = [];
    }
    get isFormsValid() {
        for (let f of this.roverForms) {
            if (!f.valid)
                return false;
        }
        return true;
    }
    get plateau() {
        return this.roverService.plateau;
    }
    ngOnInit() {
        this.orientationOpts = this.buildOptions();
        this.buildForm();
    }
    buildOptions() {
        // Create options for select input based on Cardinal Points enum
        const opts = [];
        for (let key of Object.keys(_core_enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_2__["Cardinals"])) {
            if (isNaN(+key)) {
                // Make sure to only get string keys
                const opt = { name: key, value: _core_enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_2__["Cardinals"][key] };
                opts.push(opt);
            }
        }
        return opts;
    }
    buildForm() {
        const controls = {
            x: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]),
            y: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]),
            orientation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            commandInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[MmLlRr]*$')]),
        };
        const form = this.fb.group(controls);
        // Observe if origin coordinates of rover are valid
        form.valueChanges.subscribe((val) => {
            if (val.x && val.y) {
                const check = this.roverService.offGridCheck({ x: +val.x, y: +val.y });
                console.log('check off grid', check);
                if (!check) {
                    form.setErrors({ offGrid: true });
                }
                else {
                    form.setErrors(null);
                }
            }
        });
        // Set command input to uppercase
        form.controls['commandInput'].valueChanges.subscribe((v) => {
            if (v) {
                const value = v.toUpperCase();
                form.controls['commandInput'].setValue(value, { emitEvent: false });
            }
        });
        this.roverForms.push(form);
    }
    addRoverFormBtnClick() {
        this.buildForm();
    }
    removeRoverFormBtnClick(index) {
        this.roverForms.splice(index, 1);
    }
    removeLastCommandBtnClick(index) {
        const ctrl = this.roverForms[index].controls['commandInput'];
        if (ctrl.value.length)
            ctrl.setValue(ctrl.value.slice(0, -1));
    }
    addCommandBtnClick(index, cmd) {
        const ctrl = this.roverForms[index].controls['commandInput'];
        ctrl.setValue(ctrl.value + cmd);
    }
    nextBtnClick() {
        // if all rovers created emit event
        if (this.createRoversFromForms()) {
            this.roverService.events.next(_core_enums_events_enum__WEBPACK_IMPORTED_MODULE_3__["Events"].RoversCreated);
        }
    }
    createRoversFromForms() {
        this.roverService.roverList = [];
        for (let form of this.roverForms) {
            const { x, y, orientation, commandInput } = form.value;
            const roverData = {
                origin: { coord: { x: +x, y: +y }, orientation: +orientation },
                commandInput: commandInput,
            };
            console.log('roverData', roverData);
            const rover = this.roverService.createRover(roverData);
            if (!rover)
                return;
        }
        this.roverService.events.next(_core_enums_events_enum__WEBPACK_IMPORTED_MODULE_3__["Events"].RoversCreated);
        return true;
    }
}
RoverFormComponent.ɵfac = function RoverFormComponent_Factory(t) { return new (t || RoverFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_rover_service__WEBPACK_IMPORTED_MODULE_4__["RoverService"])); };
RoverFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoverFormComponent, selectors: [["app-rover-form"]], decls: 11, vars: 2, consts: [["fxFlex", ""], [1, "mat-body-2"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end start", "fxLayoutGap", "10px", 1, "form-actions"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["roverFormTmp", ""], [1, "form-group"], [1, "mat-title"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["fxLayout", "column", "fxLayoutGap", "10px"], [1, "rover-form", 3, "formGroup"], ["fxLayout", "column", "fxLayoutAlign", "start start"], ["fxLayout", "row", "fxLayoutGap", "5px", 1, "coord-form-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "x", "type", "text", "formControlName", "x", "required", ""], ["matSuffix", ""], ["matInput", "", "placeholder", "y", "type", "text", "formControlName", "y", "required", ""], ["placeholder", "N", "formControlName", "orientation", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mat-caption form-error", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "start baseline", 1, "command-form-field"], ["matInput", "", "placeholder", "Command input", "type", "text", "formControlName", "commandInput", "required", "", 1, "command-input"], ["fxLayout", "row", "fxLayoutGap", "10px"], [1, "mat-caption", 3, "ngClass"], ["fxLayout", "row"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["inset", ""], [3, "value"], [1, "mat-caption", "form-error"]], template: function RoverFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of Rovers in this simulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoverFormComponent_ng_container_3_Template, 5, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverFormComponent_Template_button_click_5_listener() { return ctx.addRoverFormBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ADD NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverFormComponent_Template_button_click_7_listener() { return ctx.nextBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoverFormComponent_ng_template_9_Template, 41, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roverForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isFormsValid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: [".command-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.command-form-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.command-form-field[_ngcontent-%COMP%]   .command-input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b3AvcHJvamVjdHMvdWt1ZnUtdGVjaC10YXNrL3NyYy9hcHAvcm92ZXIvcm92ZXItZm9ybS9yb3Zlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3Zlci9yb3Zlci1mb3JtL3JvdmVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7QUNFSjtBRENFO0VBQ0UseUJBQUE7QUNDSjtBREdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDQUY7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL3JvdmVyLWZvcm0vcm92ZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tYW5kLWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbW1hbmQtaW5wdXQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4iLCIuY29tbWFuZC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tbWFuZC1mb3JtLWZpZWxkIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tbWFuZC1mb3JtLWZpZWxkIC5jb21tYW5kLWlucHV0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoverFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rover-form',
                templateUrl: './rover-form.component.html',
                styleUrls: ['./rover-form.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_rover_service__WEBPACK_IMPORTED_MODULE_4__["RoverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/rover/rover.module.ts":
/*!***************************************!*\
  !*** ./src/app/rover/rover.module.ts ***!
  \***************************************/
/*! exports provided: RoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoverModule", function() { return RoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _rover_form_rover_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rover-form/rover-form.component */ "./src/app/rover/rover-form/rover-form.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");






class RoverModule {
}
RoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoverModule });
RoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoverModule_Factory(t) { return new (t || RoverModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forRoot()]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoverModule, { declarations: [_rover_form_rover_form_component__WEBPACK_IMPORTED_MODULE_2__["RoverFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]], exports: [_rover_form_rover_form_component__WEBPACK_IMPORTED_MODULE_2__["RoverFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_rover_form_rover_form_component__WEBPACK_IMPORTED_MODULE_2__["RoverFormComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forRoot()],
                exports: [_rover_form_rover_form_component__WEBPACK_IMPORTED_MODULE_2__["RoverFormComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/simulation/simulation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/simulation/simulation.component.ts ***!
  \****************************************************/
/*! exports provided: SimulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationComponent", function() { return SimulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/enums/cardinals.enum */ "./src/app/core/enums/cardinals.enum.ts");
/* harmony import */ var _core_enums_events_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/enums/events.enum */ "./src/app/core/enums/events.enum.ts");
/* harmony import */ var _core_services_plateau_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/plateau.service */ "./src/app/core/services/plateau.service.ts");
/* harmony import */ var _core_services_rover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/rover.service */ "./src/app/core/services/rover.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");










const _c0 = function (a0, a1) { return { rover: a0, index: a1 }; };
function SimulationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, s_r5.rover, index_r6));
} }
function SimulationComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimulationComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.restartSimulation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimulationComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimulationComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.runSimulation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "START");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimulationComponent_ng_template_6_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Output:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Waiting simulation start...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimulationComponent_ng_template_6_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Output:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rover_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rover;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", rover_r11.position.coord.x, " ", rover_r11.position.coord.y, " ", ctx_r14.Cardinals[rover_r11.origin.orientation], "");
} }
function SimulationComponent_ng_template_6_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Last position:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rover_r11 = ctx_r17.rover;
    const index_r12 = ctx_r17.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", rover_r11.position.coord.x, " ", rover_r11.position.coord.y, " ", ctx_r15.Cardinals[rover_r11.origin.orientation], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.simulations[index_r12].rover.commandError);
} }
function SimulationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Grid input:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rover Input:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SimulationComponent_ng_template_6_p_22_Template, 7, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SimulationComponent_ng_template_6_p_23_Template, 6, 3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SimulationComponent_ng_template_6_p_24_Template, 9, 4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rover_r11 = ctx.rover;
    const index_r12 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rover #", index_r12 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.plateau.grid.upperRight.x, " ", ctx_r4.plateau.grid.upperRight.y, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", rover_r11.origin.coord.x, " ", rover_r11.origin.coord.y, " ", ctx_r4.Cardinals[rover_r11.origin.orientation], " ", rover_r11.commandInput, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.simulations[index_r12].result === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.simulations[index_r12].result);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.simulations[index_r12].result && ctx_r4.simulations[index_r12].rover.commandError);
} }
class SimulationComponent {
    constructor(plateauService, roverService) {
        this.plateauService = plateauService;
        this.roverService = roverService;
        this.simulations = null;
        this.Cardinals = _core_enums_cardinals_enum__WEBPACK_IMPORTED_MODULE_1__["Cardinals"];
        this.simulationStarted = false;
        this.simulationError = false;
        this.simulationDone = false;
    }
    get plateau() {
        return this.plateauService.plateau;
    }
    ngOnInit() {
        this.roverService.events.subscribe((val) => {
            if (val === _core_enums_events_enum__WEBPACK_IMPORTED_MODULE_2__["Events"].RoversCreated) {
                this.prepareSimulations(this.roverService.roverList);
            }
        });
    }
    prepareSimulations(rovers) {
        this.simulations = rovers.map((rover) => {
            const simulation = { rover: rover, result: null };
            return simulation;
        });
    }
    runSimulation() {
        console.log('runSimulation', this.roverService.roverList);
        this.simulationStarted = true;
        this.simulations.forEach((s, i) => {
            s.result = this.roverService.executeRoverCommands(s.rover);
            if (!s.result)
                this.simulationError = true;
        });
        this.simulationDone = true;
    }
    restartSimulation() {
        this.simulationStarted = false;
        this.simulationError = false;
        this.simulationDone = false;
        this.plateauService.plateau = null;
        this.roverService.roverList = null;
        this.roverService.events.next(_core_enums_events_enum__WEBPACK_IMPORTED_MODULE_2__["Events"].SimulationReset);
    }
}
SimulationComponent.ɵfac = function SimulationComponent_Factory(t) { return new (t || SimulationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_plateau_service__WEBPACK_IMPORTED_MODULE_3__["PlateauService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_rover_service__WEBPACK_IMPORTED_MODULE_4__["RoverService"])); };
SimulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimulationComponent, selectors: [["app-simulation"]], decls: 8, vars: 3, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutGap", "10px"], ["fxLayout", "row wrap", "fxLayoutGap", "10px"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end start"], ["mat-stroked-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["simulationResult", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayout", "column"], [1, "mat-body-2"], [4, "ngIf"], [1, "cmd-success"], [1, "cmd-error"]], template: function SimulationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimulationComponent_ng_container_2_Template, 2, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SimulationComponent_button_4_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimulationComponent_button_5_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimulationComponent_ng_template_6_Template, 25, 10, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.simulations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.simulationDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.simulationStarted);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXVsYXRpb24vc2ltdWxhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simulation',
                templateUrl: './simulation.component.html',
                styleUrls: ['./simulation.component.scss'],
            }]
    }], function () { return [{ type: _core_services_plateau_service__WEBPACK_IMPORTED_MODULE_3__["PlateauService"] }, { type: _core_services_rover_service__WEBPACK_IMPORTED_MODULE_4__["RoverService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/renatop/projects/ukufu-tech-task/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map