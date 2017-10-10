package com.devops.admin.controller;

import com.devops.admin.model.HealthInfoDetail;
import com.devops.admin.service.HealthInfoService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminController {

    private RestTemplate restTemplate = new RestTemplate();

    @Autowired
    HealthInfoService healthInfoService;

    @RequestMapping(method = RequestMethod.GET, path = "/isAlive")
    public String isAlive() {
       return "isAlive";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/healthinfo")
    public String healthInfo() {
        List<HealthInfoDetail> healthInfoList = healthInfoService.retrieveAllHealthInfo();

        if(CollectionUtils.isEmpty(healthInfoList)) {
          return "[]";
        }

        return new Gson().toJson(healthInfoList);
    }

}
