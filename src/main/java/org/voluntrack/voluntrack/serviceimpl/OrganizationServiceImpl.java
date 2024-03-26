package org.voluntrack.voluntrack.serviceimpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.voluntrack.voluntrack.enums.ResponseStatus;
import org.voluntrack.voluntrack.models.Organizations;
import org.voluntrack.voluntrack.repository.OrganizationRepository;
import org.voluntrack.voluntrack.service.OrganizationService;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class OrganizationServiceImpl implements OrganizationService {
    private final OrganizationRepository organizationRepository;

    @Override
    public ResponseVO getOrganizations() {
        ResponseVO<List<Organizations>> responseVO = new ResponseVO<>();
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        responseVO.setData(organizationRepository.findAll());
        return responseVO;
    }

    @Override
    public ResponseVO saveOrganizations(List<Organizations> organizations) {
        ResponseVO responseVO = new ResponseVO();
        try {
            organizationRepository.saveAll(organizations);
        } catch (Exception e) {
            log.error(e.getMessage());
            responseVO.setErrorMessage(e.getMessage());
            responseVO.setResponseStatus(ResponseStatus.ERROR);
            return responseVO;
        }
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        responseVO.setStatusMessage("Successfully saved Data");
        return responseVO;
    }

}
