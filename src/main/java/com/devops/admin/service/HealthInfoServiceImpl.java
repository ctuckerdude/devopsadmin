package com.devops.admin.service;

import com.devops.admin.model.HealthInfoDetail;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class HealthInfoServiceImpl implements HealthInfoService {

    private static final String HEALTH_INFO_URL = "http://localhost:8500/v1/health/state/any";
    private RestTemplate restTemplate = new RestTemplate();

    @Override
    public List<HealthInfoDetail> retrieveAllHealthInfo() {
        List<HealthInfoDetail> healInfoList = new ArrayList<>();
        Gson gson = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
                .create();

        String response = restTemplate.getForObject(HEALTH_INFO_URL, String.class);

        if(StringUtils.isNotBlank(response)) {
            HealthInfoDetail[] healthInfoArray =  gson.fromJson(response, HealthInfoDetail[].class);
            if(healthInfoArray != null) {
                healInfoList = Arrays.asList(healthInfoArray);
            }
        }

        return healInfoList;
    }
}
