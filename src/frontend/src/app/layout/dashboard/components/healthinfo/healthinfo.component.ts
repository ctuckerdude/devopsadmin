import {Component, Inject, OnInit} from '@angular/core';
import {HealthInfo} from "./health.info";
import {Http} from "@angular/http";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-healthinfo',
  templateUrl: './healthinfo.component.html',
  styleUrls: ['./healthinfo.component.scss']
})
export class HealthinfoComponent implements OnInit {

  title: string;
  healthInfoList: HealthInfo[] = [];

  constructor(private http: Http, @Inject('ApiService') private apiService: ApiService) {
      this.title = "Service Health Information"
      this.apiService.retrieveHealthInfo()
          .subscribe(
              (healthInfoList) => {
                  this.healthInfoList = healthInfoList;
              }
      );
  }

  ngOnInit() {
  }

}
