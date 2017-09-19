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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.commentsUrl = '"http://localhost:60097/api/TblUsers';
    }
    //getUserDetail(): Observable<IUser[]> {
    //    var item = this._http.get(this.commentsUrl)
    //        .map((response: Response) => <IUser[]>response.json())
    //        .catch(this.handleError);
    //    return item;
    //}
    //getUserList(): Observable<IUser[]> {
    //    var item = this._http.get(this.commentsUrl)
    //        .map((response: Response) => <IUser[]>response.json())
    //        .catch(this.handleError);
    //    return item;
    //}
    //getUserById(id: number): Observable<IUser> {
    //    return this._http.get("http://localhost:60097/api/TblUsers/" + id).
    //        map((response: Response) => <IUser>response.json()).
    //        catch(this.handleError);
    //}
    //addUser(body: Object): Observable<IUser[]> {
    //    let bodyString = JSON.stringify(body); // Stringify payload
    //    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //    let options = new RequestOptions({ headers: headers }); // Create a request option
    //    return this._http.post(this.commentsUrl, body, options) // ...using post request
    //        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    //}   
    UserService.prototype.get = function (url) {
        return this._http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.post = function (url, model) {
        //console.log("url is="+url);
        //let body = JSON.stringify(model);
        //console.log("body is=" + body);
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(url, body, options)
        //    .map((response: Response) => <any>response.json())
        //    .catch(this.handleError);
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post, headers: headers });
        var body = this.serializeObj(model);
        return this._http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    UserService.prototype.put = function (url, id, model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Put, headers: headers });
        var body = this.serializeObj(model);
        return this._http.put(url + id, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.delete = function (url, id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map