import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HealthInfo} from "./health.info";

export interface ApiService {
    retrieveHealthInfo(): Observable<HealthInfo[]>
}
