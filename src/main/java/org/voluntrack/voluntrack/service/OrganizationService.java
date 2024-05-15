package org.voluntrack.voluntrack.service;

import org.voluntrack.voluntrack.models.Organizations;
import org.voluntrack.voluntrack.vo.LoginVO;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;

public interface OrganizationService {
    ResponseVO getOrganizations();

    ResponseVO saveOrganizations(List<Organizations> organizationsList);

    Object login(LoginVO loginVO);
}
