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
var core_1 = require("@angular/core");
var user_service_1 = require("../Service/user.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../user/enum");
var global_1 = require("../user/global");
var UserDetailsComponent = (function () {
    function UserDetailsComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.indLoading = false;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: [''],
            Gender: ['', forms_1.Validators.required]
        });
        this.LoadUsers();
    };
    UserDetailsComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        console.log(global_1.Global.BASE_USER_ENDPOINT);
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    UserDetailsComponent.prototype.addUser = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New User";
        this.modalBtnTitle = "Add";
        this.userFrm.reset();
        this.modal.open();
    };
    UserDetailsComponent.prototype.editUser = function (id) {
        this.dbops = enum_1.DBOperation.update;
        console.log("id for update switch" + this.dbops);
        this.SetControlsState(true);
        this.modalTitle = "Edit User";
        this.modalBtnTitle = "Update";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    UserDetailsComponent.prototype.deleteUser = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    UserDetailsComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        console.log("form dbops is=" + this.dbops);
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._userService.post('http://localhost:60097/api/userapi/', formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                console.log("Id for update" + formData._value.Id);
                this._userService.put('http://localhost:60097/api/userapi/', formData._value.Id, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                console.log("Id for update" + formData._value.Id);
                this._userService.delete('http://localhost:60097/api/userapi/', formData._value.Id).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    UserDetailsComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    return UserDetailsComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], UserDetailsComponent.prototype, "modal", void 0);
UserDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/userDetails/userDetails.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=userDetails.component.js.map