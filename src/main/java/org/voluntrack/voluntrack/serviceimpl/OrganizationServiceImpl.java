package org.voluntrack.voluntrack.serviceimpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.voluntrack.voluntrack.enums.ResponseStatus;
import org.voluntrack.voluntrack.models.Organizations;
import org.voluntrack.voluntrack.repository.OrganizationRepository;
import org.voluntrack.voluntrack.service.OrganizationService;
import org.voluntrack.voluntrack.vo.LoginVO;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;
import java.util.Objects;

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
            organizations.stream().forEach(organization -> {
                if (Objects.isNull(organization.getUserName())) {
                    organization.setUserName(organization.getName().toLowerCase());
                }
            });
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

    @Override
    public ResponseVO login(LoginVO loginVO) {
        ResponseVO responseVO = new ResponseVO();
        responseVO.setData(organizationRepository.existsByUserNameAndPassword(loginVO.getUserName(), loginVO.getPassword()));
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        return responseVO;
    }

}
