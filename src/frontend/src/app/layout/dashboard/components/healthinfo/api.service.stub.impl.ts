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
export class ApiServiceStubImpl implements ApiService{
    constructor() {
    }
    
    retrieveHealthInfo(): Observable<HealthInfo[]> {
        return Observable.of([
            new HealthInfo({"node": "defaultStub", "serviceName": "StubServiceStub1", "status": "passing"}),
            new HealthInfo({"node": "defaultStub", "serviceName": "StubServiceStub2", "status": "critical"}),
        ]);
    }

}
