"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BlockOrUnblockSellerComponent = /** @class */ (function () {
    function BlockOrUnblockSellerComponent() {
    }
    BlockOrUnblockSellerComponent.prototype.ngOnInit = function () {
    };
    BlockOrUnblockSellerComponent = __decorate([
        core_1.Component({
            selector: 'app-block-or-unblock-seller',
            templateUrl: './block-or-unblock-seller.component.html',
            styleUrls: ['./block-or-unblock-seller.component.css']
        })
    ], BlockOrUnblockSellerComponent);
    return BlockOrUnblockSellerComponent;
}());
exports.BlockOrUnblockSellerComponent = BlockOrUnblockSellerComponent;
