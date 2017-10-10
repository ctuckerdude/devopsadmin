import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ApiService } from './api.service';
import {HealthInfo} from "./health.info";

Injectable()
export class ApiServiceImpl implements ApiService{

    constructor(private http: Http) {
    }

    public retrieveHealthInfo(): Observable<HealthInfo[]> {
        return this.http
           .get('/api/healthinfo')
           .map(response => {
             const healthInfoListJson = response.json();
             return healthInfoListJson.map((healthinfo) => new HealthInfo(healthinfo));
           })
    }

}
