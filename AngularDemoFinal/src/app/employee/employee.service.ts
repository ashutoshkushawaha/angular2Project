import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUserDetail } from './UserDetail';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    constructor(private _http: Http)
    {

    }
    getUserDetail(): Observable<IUserDetail[]>
    {
        var item = this._http.get("https://jsonplaceholder.typicode.com/posts/1")
            .map((response: Response) => <IUserDetail[]>response.json())
            .catch(this.handleError);

        return item;
    }
    getEmployeeDetail(): Observable<IEmployee[]> {
        var item = this._http.get("http://localhost:60097/api/employees/")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);

        return item;
    }
    getEmployeeByCode(empCode: string): Observable<IEmployee>
    {
        return this._http.get("http://localhost:60097/api/employees/" + empCode).
            map((response: Response) => <IEmployee>response.json()).
            catch(this.handleError);
    }
    handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error);
    }

    getEmployees(): IEmployee[] {
        return [
            { code: 'oo1', name: 'Tom', gender: 'Male', annualSalary: '11100', dateOfBirth: '11/11/2017' },
            { code: 'oo2', name: 'Tom1', gender: 'Male', annualSalary: '11100', dateOfBirth: '11/11/2017' },
            { code: 'oo3', name: 'Tom2', gender: 'Female', annualSalary: '1234', dateOfBirth: '11/11/2017' },
            { code: 'oo1', name: 'Tom', gender: 'Male', annualSalary: '12345', dateOfBirth: '11/11/2017' },
            { code: 'oo2', name: 'Tom1', gender: 'Male', annualSalary: '3456', dateOfBirth: '11/11/2017' },
            { code: 'oo3', name: 'Tom2', gender: 'Female', annualSalary: '6544', dateOfBirth: '11/11/2017' },
        ];
    }
    //getEmployeeByCode(empCode: string): Observable<IEmployee>
    //{

    //}
    //{
    //}
}