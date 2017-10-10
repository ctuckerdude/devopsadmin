package com.devops.admin.service;

import com.devops.admin.model.HealthInfoDetail;

import java.util.List;

public interface HealthInfoService {

    List<HealthInfoDetail> retrieveAllHealthInfo();
}
