"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GraficasComponent = void 0;
var core_1 = require("@angular/core");
var GraficasComponent = /** @class */ (function () {
    function GraficasComponent() {
        this.view = [700, 300];
        this.multi = [
            {
                "name": "Mexico",
                "series": [
                    {
                        "name": "Enero",
                        "value": 145
                    },
                    {
                        "name": "febrero",
                        "value": 1500
                    },
                    {
                        "name": "Abril",
                        "value": 2300
                    },
                    {
                        "name": "Mayo",
                        "value": 150
                    }
                ]
            },
            {
                "name": "Decesos",
                "series": [
                    {}
                ]
            }
        ];
        // options
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Año';
        this.yAxisLabel = 'Enfermos';
        this.timeline = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
    }
    GraficasComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    GraficasComponent.prototype.ngOnInit = function () {
    };
    GraficasComponent = __decorate([
        core_1.Component({
            selector: 'app-graficas',
            templateUrl: './graficas.component.html',
            styleUrls: ['./graficas.component.css']
        })
    ], GraficasComponent);
    return GraficasComponent;
}());
exports.GraficasComponent = GraficasComponent;
