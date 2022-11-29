"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PRACTICA1Component = void 0;
var core_1 = require("@angular/core");
var PRACTICA1Component = /** @class */ (function () {
    function PRACTICA1Component(Acceso) {
        this.Acceso = Acceso;
        this.user = {
            nombre: "",
            pass: ""
        };
    }
    PRACTICA1Component.prototype.ngOnInit = function () {
    };
    PRACTICA1Component.prototype.validar = function () {
        if (this.user.nombre != "" && this.user.pass != "") {
            console.log(this.Acceso.login(this.user));
        }
    };
    PRACTICA1Component = __decorate([
        core_1.Component({
            selector: 'app-practica1',
            templateUrl: './practica1.component.html',
            styleUrls: ['./practica1.component.css']
        })
    ], PRACTICA1Component);
    return PRACTICA1Component;
}());
exports.PRACTICA1Component = PRACTICA1Component;
