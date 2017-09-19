import { Injectable,Component, Inject } from '@angular/core';
import { IUser } from '../user/user';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    private commentsUrl = '"http://localhost:60097/api/TblUsers'; 
    headers: Headers;
    requestoptions: RequestOptions;
    constructor(private _http: Http) {

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

    get(url: string): Observable<any> {
        return this._http.get(url)
            .map((response: Response) => <any>response.json())
            // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    post(url: string, model: any): Observable<any> {
        //console.log("url is="+url);
        //let body = JSON.stringify(model);
        //console.log("body is=" + body);
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(url, body, options)
        //    .map((response: Response) => <any>response.json())
        //    .catch(this.handleError);


        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });

        let body = this.serializeObj(model);

        return this._http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }
    private serializeObj(obj:any) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    put(url: string, id: number, model: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ method: RequestMethod.Put, headers: headers });

        let body = this.serializeObj(model);

        return this._http.put(url + id, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    delete(url: string, id: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }

    //getEmployeeByCode(empCode: string): Observable<IEmployee>
    //{

    //}
    //{
    //}
}