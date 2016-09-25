"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var validators_1 = require('./validators');
var UserFormComponent = (function () {
    function UserFormComponent(_fb) {
        this._fb = _fb;
        this.submitted = false;
        this.active = true;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    UserFormComponent.prototype.initForm = function () {
        this.myForm = this._fb.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.emailValidator])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])],
            confirmPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])]
        }, { validator: validators_1.matchingPasswords('password', 'confirmPassword') });
    };
    UserFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    UserFormComponent.prototype.cleanForm = function () {
        this.submitted = false;
        this.initForm();
    };
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: 'templates/_user-form.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map